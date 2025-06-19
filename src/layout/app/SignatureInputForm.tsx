import { useState } from "react";
import { InputFormat, InputValidation, PhoneNumberFormat, SanitizeInputValue } from "../../utils/inputUtils";
import signatureTemplateJSON from "../../assets/json/companyTemplateStatic.json"
import jobPositionStaticJSON from "../../assets/json/jobPositionStatic.json"

import CardComponent from "../../components/CardComponent";
import InputGroupV2 from "./InputGroupV2";
import ButtonComponent from "../../components/ButtonComponent";
import SelectGroup from "./SelectGroup";
import SignatureInputFormStyles from "../../assets/styles/SignatureInputForm.module.scss"

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
    const jobPositionMapping = jobPositionStaticJSON.map(item => ({
        ...item,
        value: String(item.value),
    }));

    const signatureTemplateMapping = signatureTemplateJSON.map(item => ({
        ...item,
        value: String(item.value),
    })) 

    const [inputValue, setInputValue] = useState({
        template: "",
        fullName: "",
        email: "",
        jobPosition: "",
        phone: "",
    });

    const [isError, setIsError] = useState({
        template: false,
        fullName: false,
        email: false,
        jobPosition: false,
        phone: false,
    });

    const SubmitDataHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isTemplateValid = inputValue.template.trim() !== "";
        const isFullNameValid = InputValidation("inputUserName", inputValue.fullName);
        const isEmailValid = InputValidation("inputUserEmail", inputValue.email);
        const isJobPositionValid = inputValue.jobPosition.trim() !== "";
        const isPhoneValid = InputValidation("inputPhoneNumber", inputValue.phone);

        if (isFullNameValid && isEmailValid && isJobPositionValid && isPhoneValid) {
            // console.log(inputValue);
            onSuccessSubmit(inputValue);
        } else {
            setIsError({
                template: !isTemplateValid,
                fullName: !isFullNameValid,
                email: !isEmailValid,
                jobPosition: !isJobPositionValid,
                phone: !isPhoneValid,
            });
            return;
        }
        
    };

    const InputChangeHandler = (inputId: string ) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let inputValue = event.target.value;
    
        if (inputId === "fullName") {
            const sanitizedInput = SanitizeInputValue("inputForText", inputValue) || "";
            const formattedInput = InputFormat("capitalize", sanitizedInput);
            inputValue = formattedInput;
        } else if (inputId === "email") {
            inputValue = SanitizeInputValue("inputForEmail", inputValue) || "";
        } else if (inputId === "jobPosition") {
            const filterInput = SanitizeInputValue("inputForJobTitle", inputValue) || "";
            const findOption = jobPositionMapping.find((opt) => opt.value === filterInput);
            const result = findOption ? findOption.label : filterInput;
            inputValue = result;
        } else if (inputId === "phone") {
            const convertPhoneNumber = SanitizeInputValue("inputForPhone", inputValue) || "";
            inputValue = PhoneNumberFormat("phoneId", convertPhoneNumber) || "";
        } else if (inputId === "template") {
            const filterInput = SanitizeInputValue("inputForText", inputValue) || "";
            const findOption = signatureTemplateMapping.find((opt) => opt.value === filterInput);
            const result = findOption ? findOption.label : filterInput;
            inputValue = result;
        }
    
        setInputValue((prevInput) => ({
            ...prevInput,
            [inputId]: inputValue,
        }));

        // reset error for the specific field being updated
        setIsError((prevErrors) => ({
            ...prevErrors,
            [inputId]: false,
        }));
    };
    
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
                    <ButtonComponent buttonType="submit" buttonClass={SignatureInputFormStyles.buttonPrimary}>Submit</ButtonComponent>
                    </div>
            </form>
        </CardComponent>
    );
};

export default SignatureInputForm;