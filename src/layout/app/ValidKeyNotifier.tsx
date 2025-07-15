import IconComponent from "../../components/IconComponent";
import ValidKeyStyles from "../../assets/styles/ValidKeyNotifier.module.scss";
import { useEffect, useState } from "react";

interface ValidKeyNotifierProps {
    notifierType:string
};

function ValidKeyNotifier({ notifierType }: ValidKeyNotifierProps) {
    const [dots, setDots] = useState("");
    const [animateClass, setAnimateClass] = useState(ValidKeyStyles.animateEnter);

    useEffect(()=> {
        setAnimateClass(ValidKeyStyles.animateEnter);
    }, [notifierType]);

    useEffect(()=> {
        if (notifierType === "validating") {
            const interval = setInterval(() => {
                setDots((previousState) => (
                    previousState.length < 3 ? previousState + "." : ""
                ));
            }, 500);

            return () => {
                clearInterval(interval);
            }
        } else {
            return;
        }
    },[notifierType]);

    if (notifierType === "valid") {
        return (
            <div className={`${ValidKeyStyles.wrapper} ${animateClass} user-select-none`}>
                <IconComponent iconType="check" iconClass={ValidKeyStyles.successIcon} />
                <p>Product key accepted. You're good to go!</p>
                
            </div>
        );
    } else if (notifierType === "invalid") {
        return (
            <div className={`${ValidKeyStyles.wrapper} ${animateClass} user-select-none`}>
                <IconComponent iconType="xmark" iconClass={ValidKeyStyles.failureIcon} />
                <p>Oops! That key doesn’t seem right</p>
            </div>
        );
    } else if (notifierType === "validating") {
        return(
            <div className={`${ValidKeyStyles.container} ${animateClass} user-select-none`}>
                <p className={ValidKeyStyles.loadText}>Checking.<span className={ValidKeyStyles.dots}>{dots}</span></p>
            </div>
        );
    }
}

export default ValidKeyNotifier;