import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import ProductKeyInputStyles from "../assets/styles/ProductKeyInputComponent.module.scss";

interface ProductKeyInputProps {
    inputFieldAmount?: number;
    charsPerInput?: number;
}

export interface ProductKeyInputRef {
    getKey: () => string;
    isKeyComplete: () => boolean;
}

function ProductKeyInputComponentFn({ inputFieldAmount = 6, charsPerInput = 4 }: ProductKeyInputProps, ref: React.Ref<ProductKeyInputRef>) {
    const [keySegments, setKeySegments] = useState<string[]>(Array(inputFieldAmount).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useImperativeHandle(ref, () => ({
        getKey: () => keySegments.join("-"),
        isKeyComplete: () => keySegments.every(segment => segment.length === charsPerInput)
    }));


    const KeyInputHandler = (index: number, value: string) => {
        const cleaned = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, charsPerInput);
        const newSegments = [...keySegments];
        newSegments[index] = cleaned;
        setKeySegments(newSegments);

        if (cleaned.length === charsPerInput && index < inputFieldAmount - 1) {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const BackspaceHandler = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === "Backspace" && keySegments[index] === "" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const PasteHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const userClipboardData = event.clipboardData.getData("text").replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
        const splitSegments = Array(inputFieldAmount).fill("");
        
        for (let index = 0; index < inputFieldAmount; index++) {
            const start =  index * charsPerInput;
            const end = start + charsPerInput;
            splitSegments[index] = userClipboardData.slice(start, end);
        };

        setKeySegments(splitSegments);
        const lastIndex = splitSegments.findIndex((value) => value.length < charsPerInput);
        const focusIndex = lastIndex === -1 ? inputFieldAmount - 1 : lastIndex;
        inputRefs.current[focusIndex]?.focus();

    };

    return (
        <div className={ProductKeyInputStyles.wrapper}>
            { keySegments.map((value, inputIndex) => (
                <input key={inputIndex} ref={(element) => {inputRefs.current[inputIndex] = element}} id={`input-${inputIndex}`} maxLength={charsPerInput} onChange={(event) => {return KeyInputHandler(inputIndex, event.target.value)}} onKeyDown={(event) => {return BackspaceHandler(event, inputIndex)}} onPaste={PasteHandler} value={value}/>
            ))}
        </div>
    );
}

const ProductKeyInputComponent = forwardRef(ProductKeyInputComponentFn);

export default ProductKeyInputComponent;