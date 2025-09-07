import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import { GenerateHashToken } from "../function/utils/hashUtils";

import SignatureFormStyle from "../assets/styles/SignatureInputForm.module.scss"

// TO DO
// Create a function to generate a signature key hash and store it in a json file

function SignatureKeyPage() {
    const [identifier, setIdentifier] = useState<string>();
    const [key, setKey] = useState<string>();
    const [hashedValue, setHashedValue] = useState<string>();
    
    const GenerateKeyHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!identifier &&  !key) {
            return;
        } else {
            // const publicKey = "6fGn0/vCSAu7L85a2E/YwSyZHWSBnkX1mtzhF2fEKm4=";
            const result = GenerateHashToken(key!.trim(), identifier!.trim());
            console.log("Generated Hash:", result);
            setHashedValue(result);
        };
    };

    const InputIdChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdentifier(event.currentTarget.value);
    };
    const InputKeyChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKey(event.currentTarget.value);
    };

    return (
        <div>
        <h1>Signature Key Page</h1>
        <p>This page is for Generate Key Page.</p>
        <form onSubmit={GenerateKeyHandler}>
            <div style={{margin: "1rem"}}>
                <InputComponent inputId="product-id-input" inputType="text" inputAutoComplete="off" inputChangeFunction={InputIdChangeHandler}/>
            </div>
            <div style={{margin: "1rem"}}>
                <InputComponent inputId="product-key-input" inputType="text" inputAutoComplete="off" inputChangeFunction={InputKeyChangeHandler}/>
            </div>
            <div style={{margin: "1rem"}}>
                <ButtonComponent buttonType="submit" buttonClass={SignatureFormStyle.buttonPrimary}>Generate</ButtonComponent>
            </div>
        </form>

        <p>Hashed Value: {hashedValue}</p>
        </div>
    );
}


export default SignatureKeyPage;