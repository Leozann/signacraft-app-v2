import InputComponentV2 from "../../components/InputComponentV2";
import InputGroupStyles from "../../assets/styles/InputComponent.module.scss"

interface InputGroupProps {
    inputGroupLabel: string;
    inputGroupValue?: string;
    inputGroupListener?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    isInputGroupError?: boolean;
};

function InputGroupV2 ({inputGroupLabel, inputGroupValue="", inputGroupListener, isInputGroupError = false}: InputGroupProps ) {

    
    return(
        <div className={InputGroupStyles.inputGroup}>
            <p className="user-select-none">{inputGroupLabel}</p>
            <InputComponentV2 inputValue={inputGroupValue} inputChangeFunction={inputGroupListener} isInputError={isInputGroupError}/>
        </div>
    );
};

export default InputGroupV2;
