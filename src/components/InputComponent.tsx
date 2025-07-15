import InputStyles from "../assets/styles/InputComponent.module.scss"

interface InputProps {
    inputClass?: string;
    inputId: string;
    inputType: string;
    inputPlaceholder?: string;
    inputAutoComplete?: string;
    inputDisabled?: boolean;
    inputValue?: string;
    inputChangeFunction?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Accept a function with or without arguments
};

function InputComponent({inputClass, inputId, inputType = "text", inputPlaceholder, inputAutoComplete = "off", inputDisabled, inputChangeFunction, inputValue}: InputProps) {

    return(
        <input className={`${InputStyles.input} ${inputClass}`} id={inputId} type={inputType} placeholder={inputPlaceholder} autoComplete={inputAutoComplete} disabled={inputDisabled} onChange={inputChangeFunction} value={inputValue}/>
    );
};

export default InputComponent;