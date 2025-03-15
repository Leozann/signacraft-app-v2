import InputGroupStyles from "../../assets/styles/InputComponent.module.scss"
import SelectComponent from "../../components/SelectComponent";

interface SelectOptionIncludesValue {
    value: string;
    label: string;
}

interface SelectGroupProps {
    selectGroupLabel: string;
    selectGroupData: SelectOptionIncludesValue[]
    selectGroupValue?: string;
    selectGroupListener?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    isSelectGroupError?: boolean;
};

function SelectGroup({selectGroupLabel, selectGroupData, selectGroupValue="", selectGroupListener, isSelectGroupError = false }: SelectGroupProps) {
    return(
        <div className={InputGroupStyles.inputGroup}>
            <p className="user-select-none">{selectGroupLabel}</p>
            <SelectComponent inputValue={selectGroupValue} options={selectGroupData} inputChangeFunction={selectGroupListener} isSelectError={isSelectGroupError}/>
        </div>
    );
};

export default SelectGroup;