import { useEffect, useRef } from "react";
import InputStyles from "../assets/styles/InputComponent.module.scss"

interface InputProps {
    inputClass?: string;
    inputId: string;
    inputType: string;
    inputPlaceholder?: string;
    inputAutoComplete?: string;
    inputDisabled?: boolean;
    inputValue?: string;
    inputChangeFunction?: (event: React.FormEvent<HTMLInputElement>) => void; // Accept a function with or without arguments
};

function InputComponent({inputClass, inputId, inputType = "text", inputPlaceholder, inputAutoComplete = "off", inputDisabled, inputChangeFunction, inputValue}: InputProps) {
    
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        const inputElement = inputRef.current;
        if (!inputElement) return;

        const handleFocus = () => {
            setTimeout(() => {
                // inputElement.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                // inputElement.style.color = "#FFFEEF";

                inputElement.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                inputElement.style.color = "#FFFEEF";
                inputElement.style.transition = "background-color 0.3s ease-in-out";

                // Force repaint by setting box-shadow
                inputElement.style.boxShadow = "0 0 0px 1000px rgba(255, 255, 255, 0.2) inset";
            }, 100);
        };

        inputElement.addEventListener("focus", handleFocus);
        
        return () => {
            inputElement.removeEventListener("focus", handleFocus);
        };
    }, []);

    return(
        <input className={`${InputStyles.input} ${inputClass}`} id={inputId} type={inputType} placeholder={inputPlaceholder} autoComplete={inputAutoComplete} disabled={inputDisabled} onChange={inputChangeFunction} value={inputValue}/>
    );
};

export default InputComponent;