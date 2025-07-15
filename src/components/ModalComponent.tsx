import ReactDom from "react-dom";
import { useEffect, useState } from "react";

import ModalStyles from "../assets/styles/ModalComponent.module.scss"
import ButtonComponent from "./ButtonComponent";


interface ModalProps {
    modalTitle?: string;
    isModalOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    modalFooter?: React.ReactNode;
}


function ModalComponent({modalTitle, isModalOpen, onClose, children, modalFooter}: ModalProps) {
    const modalRoot = document.getElementById("root-modal");
    const [shouldRender, setShouldRender] = useState(isModalOpen);
    const [animateIn, setAnimateIn] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    const animationDuration = 300;

    useEffect(() => {
        if (isModalOpen) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "";
        }

        return () => {
        document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    useEffect(() => {
        if (isModalOpen) {
            setShouldRender(true);
            setAnimateOut(false);
            setTimeout(() => setAnimateIn(true), 10);
        } else if (shouldRender) {
            setAnimateOut(true);
            setAnimateIn(false);
            const animationTimeout = setTimeout(() => {
                setShouldRender(false);
                setAnimateOut(false);
            }, animationDuration);

            return () => {
                clearTimeout(animationTimeout);
            }
        }
    }, [isModalOpen , shouldRender, animationDuration]);


    if (!modalRoot || !shouldRender) {
        return null;
    }

    return ReactDom.createPortal(
        <div className={`${ModalStyles.overlay} ${animateOut ? ModalStyles.fadeOut : ModalStyles.fadeIn}`}>
            <div className={`${ModalStyles.modal} ${animateOut ? ModalStyles.slideOut : animateIn ? ModalStyles.slideIn : ""}`} onClick={(event)=> {event.stopPropagation();}}>
                <div className={ModalStyles.header}>
                    <p className="user-select-none">{modalTitle}</p>
                    <button className={`${ModalStyles.buttonClose} user-select-none`} onClick={onClose}>&times;</button>
                </div>
                <div className={ModalStyles.body}>{children}</div>
                <div className={ModalStyles.footer}>
                    {modalFooter ? modalFooter : <ButtonComponent buttonClass={`${ModalStyles.buttonDefault} user-select-none`} buttonType="button" buttonClickFunction={onClose}>Okay</ButtonComponent>}
                </div>
            </div>
        </div>,
        modalRoot! //question mark is used to assert that modalRoot is not null
    );
}

export default ModalComponent;