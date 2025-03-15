import InputComponent from "../../components/InputComponent";
import InputGroupStyles from "../../assets/styles/InputComponent.module.scss"

interface InputGroupProps {
    inputGroupLabel?: string;
    inputGroupId: string;
    inputGroupClass?: string;
    inputGroupType: string;
    inputGroupPlaceholder?: string;
}

function InputGroup ({inputGroupLabel, inputGroupId, inputGroupClass ,inputGroupType}: InputGroupProps ) {
    return(
        <div className={`${InputGroupStyles.inputGroup} ${inputGroupClass}`}>
            <label htmlFor={inputGroupId}>{inputGroupLabel}</label>
            <InputComponent inputId={inputGroupId} inputType={inputGroupType}/>
        </div>
    );
};

export default InputGroup;