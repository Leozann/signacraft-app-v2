// managing react state, effects, or lifecycle logic
import { useState } from "react";
import { InputValidation, InputFormat, PhoneNumberFormat, SanitizeInputValue } from "../utils/inputUtils";
import signatureTemplateJSON from "../../assets/json/companyTemplateStatic.json";
import jobPositionStaticJSON from "../../assets/json/jobPositionStatic.json";

interface FormDataIncludes {
    fullName: string;
    email: string;
    jobPosition: string;
    phone: string;
    template: string;
};

function UseSignatureInputFormHooks(onSuccessSubmit : (data: FormDataIncludes)=> void) {
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<FormDataIncludes | null>(null);
    const [submitAlert, setSubmitAlert] = useState(false);

    const SubmitDataHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isTemplateValid = inputValue.template.trim() !== "";
        const isFullNameValid = InputValidation("inputUserName", inputValue.fullName);
        const isEmailValid = InputValidation("inputUserEmail", inputValue.email);
        const isJobPositionValid = inputValue.jobPosition.trim() !== "";
        const isPhoneValid = InputValidation("inputPhoneNumber", inputValue.phone);

        if ( isTemplateValid && isFullNameValid && isEmailValid && isJobPositionValid && isPhoneValid) {
            // console.log(inputValue);
            setFormData(inputValue);
            setIsModalOpen(true);
            // onSuccessSubmit(inputValue);
        } else {
            setIsError({
                template: !isTemplateValid,
                fullName: !isFullNameValid,
                email: !isEmailValid,
                jobPosition: !isJobPositionValid,
                phone: !isPhoneValid,
            });
            setSubmitAlert(true);
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

    const CloseModalHandler = (modalType: string) => {
        if (modalType === "verification") {
            setIsModalOpen(false);
        } else if (modalType === "alert") {
            setSubmitAlert(false);
        }
    };

    const SubmitAfterKeyVerifiedHandler = () => {
        if (formData) {
            onSuccessSubmit(formData);
            setFormData(null);
        }
    };

    return {
        inputValue,
        isError,
        submitAlert,
        isModalOpen,
        formData,
        jobPositionMapping,
        signatureTemplateMapping,
        InputChangeHandler,
        CloseModalHandler,
        SubmitDataHandler,
        SubmitAfterKeyVerifiedHandler
    }
};

export type { FormDataIncludes };
export { UseSignatureInputFormHooks };