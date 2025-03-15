import ButtonStyles from "../assets/styles/ButtonComponent.module.scss"

interface ButtonProps {
    // question mark, its mean the props is optional, otherwise is required
    buttonClass?: string;
    buttonType: "button" | "submit" | "reset";
    children: React.ReactNode;
    buttonDisabled?: boolean;
    buttonClickFunction?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Accept a function with or without arguments
}

function ButtonComponent({ buttonClass, buttonType = "button", buttonDisabled = false, children, buttonClickFunction }: ButtonProps) {
    return(
        <button className={`${ButtonStyles.button} ${buttonClass}`} type={buttonType} disabled={buttonDisabled} onClick={buttonClickFunction}>{children}</button>
    );
};

export default ButtonComponent;