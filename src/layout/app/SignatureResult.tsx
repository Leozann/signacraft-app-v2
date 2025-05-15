import { createRef } from "react";
import { Fragment } from "react/jsx-runtime";

import CardComponent from "../../components/CardComponent";
import ButtonComponent from "../../components/ButtonComponent";
import IconComponent from "../../components/IconComponent";
import SignatureResultStyles from "../../assets/styles/SignatureResult.module.scss";
import SignatureTemplate from "./SignatureTemplate";

interface UserSignatureData {
    fullName: string;
    email: string;
    jobPosition: string;
    phone: string;
    template: string;
}

interface SignatureResultProps {
    signatureData: UserSignatureData;
}

function SignatureResult ({signatureData} : SignatureResultProps) {
    const templateRef = createRef<HTMLDivElement>();

    const GetClipboardName = () => {
        if (signatureData.fullName) {
            const userName = signatureData.fullName.trim();
            const splitName = userName.split(" "); // Split into words

            if (splitName.length > 1) {
                return `${splitName[0]}_${splitName[1]}_Signature`; // Use first two words
            } else {
                return `${splitName[0]}_Signature`;
            };
        } else {
            return "ERROR"
        }
    };

    const CopyResultHandler = async() => {
        if (templateRef.current) {
            const content = templateRef.current.innerHTML;
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        "text/html": new Blob([content], { type: "text/html" }),
                        "text/plain": new Blob([content], { type: "text/plain" }), // Fallback for plain text
                    }),
                ]);
                alert("Copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        } else {
            alert("No signature data to copy!");
        }
    };

    const clipboardName = GetClipboardName();

    return(
    <Fragment>
        <CardComponent cardClass={SignatureResultStyles.card}>
            <div className={`${SignatureResultStyles.wrapper} user-select-none`}>
                <div className={SignatureResultStyles.displayFlex}>
                    <div className={SignatureResultStyles.platform}>
                        <IconComponent iconType="chrome" iconClass={SignatureResultStyles.icon}/>
                        <p>{clipboardName}</p>
                    </div>
                    <ButtonComponent buttonClass={SignatureResultStyles.buttonPrimary} buttonType="button" buttonClickFunction={CopyResultHandler}>copy</ButtonComponent>
                </div>
            </div>
        </CardComponent>

        {/* hide the template component, only take the result as copy features */}
        {/* <div ref={templateRef} style={{backgroundColor: "white", height: "auto"}}>
            <SignatureTemplate userSignatureData={signatureData}/>
        </div> */}

        <div ref={templateRef} style={{display: "none"}}>
            <SignatureTemplate userSignatureData={signatureData}/>
        </div>
    </Fragment>
    );
};

export default SignatureResult;