import { createRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";

import CardComponent from "../../components/CardComponent";
import ButtonComponent from "../../components/ButtonComponent";
import IconComponent from "../../components/IconComponent";
import SignatureResultStyles from "../../assets/styles/SignatureResult.module.scss";
import SignatureTemplate from "./SignatureTemplate";
import TooltipComponent from "../../components/TooltipComponent";

interface UserSignatureData {
    fullName: string;
    email: string;
    jobPosition: string;
    phone: string;
    template: string;
}

interface SignatureResultProps {
    signatureData: UserSignatureData;
    signatureDevice?: string; // Optional prop for device type, if needed
}

function SignatureResult ({signatureData, signatureDevice} : SignatureResultProps) {
    const templateRef = createRef<HTMLDivElement>();
    const [isCopied, setIsCopied] = useState(false);

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
                // alert("Copied to clipboard!");
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 3000);

            } catch (err) {
                console.error("Failed to copy:", err);
            }
        } else {
            alert("No signature data to copy!");
        }
    };

    const clipboardName = GetClipboardName();

    if (signatureDevice === "native") {
        return(
            <Fragment>
                <CardComponent cardClass={SignatureResultStyles.card}>
                    <div className={`${SignatureResultStyles.wrapper} user-select-none`}>
                        <div className={SignatureResultStyles.displayFlex}>
                            <div className={SignatureResultStyles.platform}>
                                <IconComponent iconType="chrome" iconClass={SignatureResultStyles.icon}/>
                                {/* <IconComponent iconType="phone" iconClass={SignatureResultStyles.icon}/> */}
                                {/* <IconComponent iconType="laptop-2" iconClass={SignatureResultStyles.icon}/> */}
                                <p>{clipboardName}</p>
                            </div>
                            <ButtonComponent buttonClass={SignatureResultStyles.buttonPrimary} buttonType="button" buttonClickFunction={CopyResultHandler}>copy</ButtonComponent>
                        </div>
                    </div>
                    <TooltipComponent isCollapsed={!isCopied} message="Copied to clipboard!"/>
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
    } else {
        return(
            <Fragment>
                <CardComponent cardClass={SignatureResultStyles.card}>
                    <div className={`${SignatureResultStyles.wrapper} user-select-none`}>
                        <div className={SignatureResultStyles.displayFlex}>
                            <div className={SignatureResultStyles.platform}>
                                <IconComponent iconType="phone" iconClass={SignatureResultStyles.icon}/>
                                {/* <IconComponent iconType="laptop-2" iconClass={SignatureResultStyles.icon}/> */}
                                <p>{clipboardName}</p>
                            </div>
                            {/* <ButtonComponent buttonClass={SignatureResultStyles.buttonPrimary} buttonType="button" buttonClickFunction={CopyResultHandler}>copy</ButtonComponent> */}
                        </div>
                    </div>
                    <TooltipComponent isCollapsed={!isCopied} message="Copied to clipboard!"/>
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
    }

    // return(
    // <Fragment>
    //     <CardComponent cardClass={SignatureResultStyles.card}>
    //         <div className={`${SignatureResultStyles.wrapper} user-select-none`}>
    //             <div className={SignatureResultStyles.displayFlex}>
    //                 <div className={SignatureResultStyles.platform}>
    //                     <IconComponent iconType="chrome" iconClass={SignatureResultStyles.icon}/>
    //                     {/* <IconComponent iconType="phone" iconClass={SignatureResultStyles.icon}/> */}
    //                     {/* <IconComponent iconType="laptop-2" iconClass={SignatureResultStyles.icon}/> */}
    //                     <p>{clipboardName}</p>
    //                 </div>
    //                 <ButtonComponent buttonClass={SignatureResultStyles.buttonPrimary} buttonType="button" buttonClickFunction={CopyResultHandler}>copy</ButtonComponent>
    //             </div>
    //         </div>
    //         <TooltipComponent isCollapsed={!isCopied} message="Copied to clipboard!"/>
    //     </CardComponent>

    //     {/* hide the template component, only take the result as copy features */}
    //     {/* <div ref={templateRef} style={{backgroundColor: "white", height: "auto"}}>
    //         <SignatureTemplate userSignatureData={signatureData}/>
    //     </div> */}

    //     <div ref={templateRef} style={{display: "none"}}>
    //         <SignatureTemplate userSignatureData={signatureData}/>
    //     </div>
    // </Fragment>
    // );
};

export default SignatureResult;