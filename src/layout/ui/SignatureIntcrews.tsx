interface UserSignatureData {
    fullName: string;
    jobPosition: string;
    phone: string;
    email: string;
}

interface SignatureTemplateProps {
    userSignatureData: UserSignatureData;
}

function SignatureIntcrews({userSignatureData}: SignatureTemplateProps) {
    return(
        <p>{userSignatureData.fullName}</p>
    )
}

export default SignatureIntcrews;