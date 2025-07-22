// import { useState } from "react";
// import { InputFormat, InputValidation, PhoneNumberFormat, SanitizeInputValue } from "../../function/utils/inputUtils";
// import signatureTemplateJSON from "../../assets/json/companyTemplateStatic.json"
// import jobPositionStaticJSON from "../../assets/json/jobPositionStatic.json"

import CardComponent from "../../components/CardComponent";
import InputGroupV2 from "./InputGroupV2";
import ButtonComponent from "../../components/ButtonComponent";
import SelectGroup from "./SelectGroup";
import SignatureInputFormStyles from "../../assets/styles/SignatureInputForm.module.scss"
import SignatureVerification from "./SignatureVerification";
import { UseSignatureInputFormHooks } from "../../function/hooks/useSignatureFormHooks";

interface FormDataIncludes {
    fullName: string;
    email: string;
    jobPosition: string;
    phone: string;
    template: string;
};

interface SignatureInputFormProps {
    onSuccessSubmit: (data: FormDataIncludes) => void;
};

function SignatureInputForm({onSuccessSubmit}: SignatureInputFormProps) {
    const {inputValue, isError, isModalOpen, formData, InputChangeHandler, CloseModalHandler ,SubmitDataHandler, SubmitAfterKeyVerifiedHandler, jobPositionMapping, signatureTemplateMapping,} =  UseSignatureInputFormHooks(onSuccessSubmit);
    return(
        <CardComponent cardClass={SignatureInputFormStyles.card}>
            <h5 className={`${SignatureInputFormStyles.header} user-select-none`} >SignatureX</h5>
            <form className={SignatureInputFormStyles.form} onSubmit={SubmitDataHandler} autoComplete="off">
                    <SelectGroup selectGroupLabel="Choose Template" selectGroupData={signatureTemplateMapping} selectGroupValue={inputValue.template} selectGroupListener={InputChangeHandler("template")} isSelectGroupError={isError.template}/>
                    <InputGroupV2 inputGroupLabel="Full Name" inputGroupValue={inputValue.fullName} inputGroupListener={InputChangeHandler("fullName")} isInputGroupError={isError.fullName}/>
                    <InputGroupV2 inputGroupLabel="Email" inputGroupValue={inputValue.email} inputGroupListener={InputChangeHandler("email")} isInputGroupError={isError.email}/>
                    <SelectGroup selectGroupLabel="Job Position" selectGroupData={jobPositionMapping} selectGroupValue={inputValue.jobPosition} selectGroupListener={InputChangeHandler("jobPosition")} isSelectGroupError={isError.jobPosition}/>
                    <InputGroupV2 inputGroupLabel="Phone" inputGroupValue={inputValue.phone} inputGroupListener={InputChangeHandler("phone")} isInputGroupError={isError.phone}/>
                    <div className={SignatureInputFormStyles.formAction}>
                        <ButtonComponent buttonType="submit" buttonClass={`${SignatureInputFormStyles.buttonPrimary} user-select-none`}>Submit</ButtonComponent>
                    </div>
                    {/* testing */}
                    {/* <button onClick={()=>{setIsModalOpen(true)}}>Open Modal</button> */}
                    {formData && (
                        <SignatureVerification isOpen={isModalOpen} isClose={CloseModalHandler} onKeyVerified={SubmitAfterKeyVerifiedHandler}/>
                    )}
            </form>
        </CardComponent>
    );
};

export default SignatureInputForm;