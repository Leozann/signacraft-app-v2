function InputValidation ( inputType: string, inputValue: string) {
    if (inputType === "inputUserName"){
        const userNameRegex = /^[a-zA-Z\s]{3,30}$/; // allow only letters (both uppercase and lowercase), 3 to 30 characters
        return userNameRegex.test(inputValue);
    } else if (inputType === "inputUserEmail"){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // standard email format
        return emailRegex.test(inputValue);
    } else if (inputType === "inputUserPassword"){
        return;
    } else if (inputType === "inputPhoneNumber"){
        const phoneNumberRegex = /^\+?\d{10,}$/; // only allow digits (0-9), minimum 10 digits
        return phoneNumberRegex.test(inputValue);
    }
};

function InputFieldVisualization ( inputType: string, inputValue: string) {
    if (inputType === "inputUserPassword") {
        return inputValue;
    };
};

function SanitizeInputValue(inputType: string, inputValue: string) {
    if (inputType === "inputForText") { //sanitization before trim
        let filteredValue = inputValue.replace(/[^a-zA-Z\s]/g, ""); 
        if (filteredValue.length > 0 && filteredValue[0] === " ") {
            filteredValue = filteredValue.trimStart();
        }
        return filteredValue.replace(/\s{2,}/g, " "); // prevent multiple space between words
    } else if (inputType === "inputForEmail") { // trim to before sanitization 
        const trimmedValue = inputValue.trim();
        return trimmedValue.replace(/[^a-zA-Z0-9@._-]/g, ""); // allow text, punctuation
    } else if (inputType === "inputForPhone") {
        const trimmedValue = inputValue.trim();
        return trimmedValue.replace(/[^0-9]/g, ""); // only allow number 0-9
    }
    return "";
};

function PhoneNumberFormat (inputType: string, inputValue: string) {
    const phoneNumber = inputValue.toString();
    if (inputType === "phoneId") {
        if (phoneNumber.startsWith("0")) {
            return "+62" + phoneNumber.slice(1);
        } else if (phoneNumber.startsWith("62")) {
            const formattedPhoneNumber = "+" + inputValue;
            return formattedPhoneNumber
        };
    } else {
        console.warn("Invalid convert data")
    };
    return inputValue;
};

function InputFormat(inputType: string, inputValue: string) {
    if (inputType === "capitalize") {
        return inputValue.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }else {
        console.warn("Invalid convert data")
    };
    return "";
}

export { InputValidation, InputFieldVisualization, SanitizeInputValue, PhoneNumberFormat, InputFormat };