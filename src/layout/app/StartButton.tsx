import { useNavigate } from "react-router-dom";

import ButtonComponent from "../../components/ButtonComponent";
import ManualGuideDocument from "../../assets/docs/SC_Manuals.pdf"
import StartButtonStyles from "../../assets/styles/StartButton.module.scss"

function StartButton () {
    const navigate = useNavigate();

    const NavigateUserActionHandler = (actionId: string) => {
        if(actionId === "guide") {
            console.log("clicked guide");
            window.open(ManualGuideDocument, "_blank");
        } else {
            navigate("/signature");
        };
    };

    return(
        <div className={StartButtonStyles.container}>
            <div className={StartButtonStyles.wrapper}>
                <ButtonComponent buttonClass={StartButtonStyles.buttonSecondary} buttonType="button" buttonClickFunction={() => NavigateUserActionHandler("guide")}>User Guide</ButtonComponent>
                <ButtonComponent buttonClass={StartButtonStyles.buttonPrimary} buttonType="button" buttonClickFunction={()=> NavigateUserActionHandler("start")}>Start Now</ButtonComponent>
            </div>
            <div className={`${StartButtonStyles.semVer} user-select-none`}>
                <p>Signacraft v2.0.0</p>
            </div>
        </div>
    );
};

export default StartButton;