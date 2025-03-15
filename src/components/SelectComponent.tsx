// SelectComponent.tsx
import React, { useEffect, useRef, useState } from "react";
import SelectStyles from "../assets/styles/InputComponent.module.scss";

interface OptionIncludesValue {
    value: string;
    label: string;
}

interface SelectComponentProps {
    inputValue: string;
    options: OptionIncludesValue[]; // Array of objects for options
    isSelectError: boolean;
    inputChangeFunction?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ inputValue, isSelectError, options, inputChangeFunction}) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [filteredOptions, setFilteredOptions] = useState<OptionIncludesValue[]>([]);
    const [inputId, setInputId] = useState("");

    const onFocusHandler = () => {
        setIsDropdownVisible(true);
    };

    const onBlurHandler = () => { // event fires when an input field loses focus (when the user clicks outside of it or switches to another field).
        // setTimeout(() => setIsDropdownVisible(false), 200);
        setTimeout(() => {
            // If no matching options exist and user didn't select anything, clear the input value
            if (filteredOptions.length === 0 && inputValue !== "") {
                if (inputChangeFunction) {
                    const event = {
                        target: { value: "" }, // Clear input
                    } as React.ChangeEvent<HTMLTextAreaElement>;
                    inputChangeFunction(event);
                }
            }
            setIsDropdownVisible(false);
        }, 200) // set timeout for delay effect where user can click the dropdown value
    };

    const onOptionClickHandler = (option: OptionIncludesValue) => {
        if (inputChangeFunction) {
            const event = {
                target: {
                value: option.label,
                },
            } as React.ChangeEvent<HTMLTextAreaElement>;
            inputChangeFunction(event);
        }
        setIsDropdownVisible(false);
    };
    const OnKeyDownHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
        };
    };


    useEffect(() => {
        if (wrapperRef.current) {
            if (isDropdownVisible) {
                wrapperRef.current.classList.add(SelectStyles.active);
            } else {
                wrapperRef.current.classList.remove(SelectStyles.active);
            }
        }
    }, [isDropdownVisible]);

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    // filter the local copy when inputValue changes
    useEffect(() => {
        const lowerCaseInput = inputValue.toLowerCase();
        const newFilteredOptions = options.filter(option =>
            option.label.toLowerCase().includes(lowerCaseInput)
        );
        setFilteredOptions(newFilteredOptions);
    }, [inputValue, options]);

    useEffect(() => {
        const randomId = `select-${Math.floor(Math.random() * 100000)}`;
        setInputId(randomId);
    }, []);

    return (
        <div ref={wrapperRef} className={`${SelectStyles.wrapper} ${isSelectError ? SelectStyles.error : ""}`}>
            <textarea
                className={SelectStyles.text} id={inputId}
                rows={1}
                value={inputValue}
                onChange={inputChangeFunction}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                onKeyDown={OnKeyDownHandler}
            />
            {isDropdownVisible && (

                <div className={SelectStyles.dropdownWrapper}>
                    <div className={SelectStyles.dropdownLayer}>
                        <ul className={SelectStyles.dropdown}>
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <li 
                                    key={option.value} 
                                    onClick={() => onOptionClickHandler(option)} // Pass the entire option object
                                    className={SelectStyles.option}
                                >
                                    {option.label}
                                </li>
                                ))
                            ) : (
                                <li className={`${SelectStyles.option} ${SelectStyles.textCenter}`}>Data Not Found</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectComponent;
