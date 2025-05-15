// SignatureX.tsx
import { useState } from "react";
import SignatureInputForm from "./SignatureInputForm";
import SignatureResult from "./SignatureResult";

interface FormDataIncludes {
    fullName: string;
    email: string;
    jobPosition: string;
    phone: string;
    template: string;
}

function SignatureX() {
    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState<FormDataIncludes | null>(null);

    const DisplayResultHandler = (newInputData: FormDataIncludes) => {
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
                <SignatureResult signatureData={{...formData}}/>
            )}
        </div>
    );
}

export default SignatureX;
