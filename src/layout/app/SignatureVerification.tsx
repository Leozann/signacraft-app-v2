import { useCallback, useEffect, useRef, useState } from "react";
import ModalComponent from "../../components/ModalComponent";
import tokenJson from "../../assets/json/signatureToken.json";
import IconComponent from "../../components/IconComponent";
import ProductKeyInputComponent, { ProductKeyInputRef } from "../../components/ProductKeyInputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import ValidKeyNotifier from "./ValidKeyNotifier";

import VerificationStyles from "../../assets/styles/SignatureVerification.module.scss";
import ModalStyles from "../../assets/styles/ModalComponent.module.scss";
import { VerifyHashToken } from "../../function/utils/hashUtils";

interface SignatureVerificationProps {
    isOpen: boolean;
    isClose: () => void;
    onKeyVerified: ()=> void;
};

let lastUsedIdentifier: string | null = null;

const RandomizeIdentifier = () => {
    const filterId = tokenJson.filter((item) => item.identifier !== lastUsedIdentifier);
    if (filterId.length === 0) {
        lastUsedIdentifier = null; // Reset if no valid identifiers left
        return;
    } else {
        const randomIndex = Math.floor(Math.random() * filterId.length);
        return filterId[randomIndex];
    }
};

function SignatureVerification({isOpen, isClose, onKeyVerified}: SignatureVerificationProps) {
    const inputRef = useRef<ProductKeyInputRef>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isKeyMatch, setIsKeyMatch] = useState<boolean>();
    const [productId, setProductId] = useState<string>();
    const [isChecking, setIsChecking] = useState(false);
    const ResetState = () => {
        setIsSubmit(false);
        setIsKeyMatch(undefined);
        setIsChecking(false);
    };
    

    useEffect(() => {
        if (isOpen) {
            const selectedKey = RandomizeIdentifier();
            lastUsedIdentifier = selectedKey!.identifier;
            setProductId(lastUsedIdentifier)
            ResetState();
        }
    }, [isOpen]);

    useEffect(() => {
        const interval = setInterval(() => {
            const isKeyComplete = inputRef.current?.isKeyComplete() ?? false;
            setIsButtonDisabled(!isKeyComplete);
        }, 300); // Check every 300ms
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const CopyToClipboardHandler = () => {
        if (productId) {
            navigator.clipboard.writeText(productId).then(() => {
                return;
            }).catch((error)=> {
                console.error("Failed to copy: ", error);
            });
        } else {
            console.warn("Product ID not found")
        }
    };

    const CheckProductKeyHandler = useCallback(() => {
        const enteredValue = inputRef.current?.getKey() ?? "";
        const findData = tokenJson.find((item) => item.identifier === productId);

        if (!findData) {
            console.error("Product ID not found");
            return
        } else {
            setIsChecking(true);
            const expectedHash = findData.productKey.trim();
            const isInputValid = VerifyHashToken(enteredValue.trim(), productId!, expectedHash);
            setTimeout(() => {
                setIsChecking(false);
                setIsSubmit(true);
                if (isInputValid) {
                    setIsKeyMatch(true);
                    setIsButtonDisabled(true);
                    setTimeout(() => {
                        isClose();
                        onKeyVerified();
                        ResetState();
                    }, 3000);
                } else {
                    setIsKeyMatch(false);
                    setTimeout(() => {
                        ResetState();
                    }, 3000);
                }
            }, 5000); // simulate delay for loading to validate
        }
    }, [inputRef, productId, isClose, onKeyVerified]);

    useEffect(()=> {
        const EnterKeyHandler = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                const isInputKeyComplete = inputRef.current?.isKeyComplete?.();
                if (isOpen && isInputKeyComplete) {
                    event.preventDefault();
                    CheckProductKeyHandler()
                }

            }
        };

        if (isOpen) {
            window.addEventListener("keydown", EnterKeyHandler);
        }

        return () => {
            window.removeEventListener("keydown", EnterKeyHandler)
        }

    }, [isOpen, CheckProductKeyHandler]);

    const FooterAction = () => {
        return(
            <ButtonComponent buttonClass={`${ModalStyles.buttonDefault} user-select-none`} buttonType="button" buttonClickFunction={CheckProductKeyHandler} buttonDisabled={isButtonDisabled}>Check</ButtonComponent>
        );
    }

    return(
        <ModalComponent modalTitle="Enter Key to Confirm Signature" isModalOpen={isOpen} onClose={isClose} modalFooter={FooterAction()}>
            <p className="user-select-none" style={{ marginBottom: '0.3rem', textAlign: 'justify', fontSize: 'calc(100% - 3px)' }}>Please copy the key below and share it with your Department. They will send you the product key required to complete your e-signature</p>
            <div className={VerificationStyles.wrapper}>
                <div className={VerificationStyles.keyContainer}>
                    <p>{productId}</p>
                    <IconComponent iconType="clipboard" iconClass={VerificationStyles.copyIcon} iconClickFunction={CopyToClipboardHandler}/>
                </div>
            </div>
            <div className={`${VerificationStyles.description} user-select-none`}>
                <IconComponent iconType="bell-1" iconClass={VerificationStyles.bellIcon}/>
                <p>Please enter the product key below</p>
            </div>
            <div className={VerificationStyles.inputContainer}>
                {/* {<ValidKeyNotifier notifierType="validating"/>} */}
                {!isSubmit && !isKeyMatch && !isChecking && (
                    <div className={`${VerificationStyles.fadeWrapper} ${VerificationStyles.fadeIn}`}>
                        <ProductKeyInputComponent inputFieldAmount={3} charsPerInput={4} ref={inputRef}/>
                    </div>
                )}
                {isChecking && <ValidKeyNotifier notifierType="validating"/>}
                {isSubmit && isKeyMatch && <ValidKeyNotifier notifierType="valid" />}
                {isSubmit && !isKeyMatch && <ValidKeyNotifier notifierType="invalid"/>}
            </div>
        </ModalComponent>
    )
};

export default SignatureVerification;