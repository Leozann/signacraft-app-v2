import { useEffect, useState } from "react";
import TextAreaStyles from "../assets/styles/InputComponent.module.scss"

interface TextAreaProps {
    inputValue: string;
    isInputError: boolean;
    inputChangeFunction?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
function TextArea({inputValue, isInputError, inputChangeFunction} : TextAreaProps) {
    const [inputId, setInputId] = useState("");

    useEffect(() => {
        const randomId = `input-${Math.floor(Math.random() * 100000)}`;
        setInputId(randomId);
    }, []);

    const OnKeyDownHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
        };
    };

    return(
        <div className={`${TextAreaStyles.wrapper} ${isInputError ? TextAreaStyles.error : ""}`}>
            <textarea id={inputId} className={TextAreaStyles.text} rows={1} value={inputValue} onChange={inputChangeFunction} onKeyDown={OnKeyDownHandler}/>
        </div>
        
    );
};

export default TextArea;