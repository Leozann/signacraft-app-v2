import ModalComponent from "../../components/ModalComponent";

interface SignatureInputInvalidProps {
    isAlert: boolean;
    isClose: () => void;
    alertMessage?: string;
};

function SignatureInputInvalid({ isAlert, isClose, alertMessage }: SignatureInputInvalidProps) {
    return(
        <ModalComponent isModalOpen={isAlert} modalTitle="You're so close!" onClose={isClose}>
            <p style={{fontSize: "calc(100% - 3px)", justifyContent: "center"}}>{alertMessage}</p> 
        </ModalComponent>
    );
};

export default SignatureInputInvalid;   