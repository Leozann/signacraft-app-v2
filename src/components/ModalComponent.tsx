interface ModalProps {
    isModalVisible: boolean;
    children?: React.ReactNode;
    modalCloseFunction: () => void;
}

function ModalComponent ({isModalVisible, children}: ModalProps) {
    return(
        <div>
            <p>Modal</p>
        </div>
    );
};

export default ModalComponent;