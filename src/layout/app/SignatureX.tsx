import { Fragment, useState } from "react";
import SignatureInputForm from "./SignatureInputForm";
import SignatureResult from "./SignatureResult";
import { IFormData } from "@/function/types/form";

function SignatureX() {
    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState<IFormData | null>(null);

    const DisplayResultHandler = (newInputData: IFormData) => {
        if (newInputData) {
            // console.log(newInputData);
            setIsFormValid(true);
            setFormData(newInputData);
        }
    };

    return (
        <div>
            <SignatureInputForm onSuccessSubmit={DisplayResultHandler} />
            {isFormValid && formData && (
                <Fragment>
                    <SignatureResult signatureDevice="native" signatureData={{...formData}}/>
                    <SignatureResult signatureDevice="phone" signatureData={{...formData}}/>
                </Fragment>
            )}
        </div>
    );
}

export default SignatureX;
