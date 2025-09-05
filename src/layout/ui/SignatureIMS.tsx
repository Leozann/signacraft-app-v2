import { Fragment } from "react/jsx-runtime"

interface UserSignatureData {
    fullName: string;
    jobPosition: string;
    phone: string;
    email: string;
}

interface SignatureTemplateProps {
    userSignatureData: UserSignatureData;
}

function SignatureIMS({ userSignatureData }: SignatureTemplateProps) {
    return (
        <Fragment>
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10pt' }}>With best regards,<br /><br /></span>
            <table cellSpacing="0" cellPadding="0" border={0} style={{ fontFamily: 'Arial, sans-serif' }}>
                <tbody>
                    <tr>
                        <td>
                            <table cellSpacing="0" cellPadding="0" border={0} width={"300pt"} style={{ fontFamily: 'Arial, sans-serif', color: '#1B1C1E' }}
                            >
                                <tbody>
                                    <tr>
                                        <td style={{ paddingLeft: '5px', lineHeight: '1.1' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '10pt', color: '#174E86', letterSpacing: '-0.3px' }}>{userSignatureData.fullName}</span><br />
                                            <span style={{ fontSize: '10pt', color: '#174E86', letterSpacing: '-0.3px' }}>{userSignatureData.jobPosition}</span><br />
                                            <span style={{ fontSize: '10pt', color: '#1B1C1E', letterSpacing: '-0.3px' }}>
                                                <strong style={{ color: '#174E86' }}>O.</strong>&nbsp;
                                                <a href="tel:+622138250011" style={{ color: '#174E86', textDecoration: 'none' }}>
                                                    +62&nbsp;21&nbsp;38250011
                                                </a>&nbsp;|&nbsp;
                                                <strong style={{ color: '#174E86' }}>M.</strong>&nbsp;
                                                <a href={`tel:${userSignatureData.phone}`} style={{ color: '#174E86', textDecoration: 'none' }}>
                                                    {userSignatureData.phone}
                                                </a>
                                            </span><br />
                                            <span style={{ fontSize: '10pt', color: '#174E86', letterSpacing: '-0.3px' }}>
                                                <strong style={{ color: '#174E86' }}>E.</strong>&nbsp;
                                                <a href={`mailto:${userSignatureData.email}`} style={{ color: '#174E86' }}>
                                                    {userSignatureData.email}
                                                </a>
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td height="10" style={{ borderBottom: '1px solid #888888' }}></td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <table cellSpacing="0" cellPadding="0" border={0} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td height="7"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50" style={{ verticalAlign: 'top' }}>
                                                            <img
                                                                src="https://i-mitrastrategis.com/images/e-signature/ims-company/company_logo.png"
                                                                alt="company"
                                                                {...{ border: "0" }}
                                                                style={{ maxWidth: '50px', height: 'auto', paddingRight: '5px' }}
                                                            />
                                                        </td>

                                                        <td width="7">
                                                            <span>&nbsp;</span>
                                                        </td>
                                                        <td style={{ verticalAlign: 'top' }}>
                                                            <table cellSpacing="0" cellPadding="0" border={0}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td colSpan={4}
                                                                            style={{
                                                                                fontWeight: 'bold',
                                                                                fontSize: '9pt',
                                                                                color: '#174E86',
                                                                                whiteSpace: 'nowrap',
                                                                                letterSpacing: '-0.3px'
                                                                            }}
                                                                        >
                                                                            &nbsp;INTCREWS&nbsp;
                                                                            <span style={{ color: '#174E86', fontWeight: 'lighter', letterSpacing: '-0.3px' }}>MITRA STRATEGIS</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '9pt', color: '#174E86', whiteSpace: 'nowrap', lineHeight: '0.5', paddingBottom: '5px', letterSpacing: '-0.3px' }}>
                                                                            &nbsp;Navigating The Innovation
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height={10}></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'top', lineHeight: '1', whiteSpace: 'nowrap', letterSpacing: '-0.3px' }}>
                                                                            <span style={{ fontWeight: 'bold', fontSize: '8pt', color: '#174E86' }}>&nbsp;Menara Tendean, 28Fl</span><br />
                                                                            <span style={{ fontSize: '8pt', color: '#174E86' }}>&nbsp;Jl. Kapten Tendean No.20C,<br />&nbsp;Jakarta Sel., DKI Jakarta 12790</span>
                                                                        </td>



                                                                        <td style={{ verticalAlign: 'top', lineHeight: '1', fontSize: '8pt', whiteSpace: 'nowrap', paddingLeft: '30px' }}>
                                                                            <span style={{ letterSpacing: '-0.3px' }}>
                                                                                <span style={{ fontWeight: 'bold', color: '#174E86' }}>W.</span>&nbsp;
                                                                                <a href="www.i-mitrastrategis.com" style={{ color: '#174E86' }}>&nbsp;www.i-mitrastrategis.com</a>
                                                                            </span>

                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td height={10}></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <table cellPadding={0} cellSpacing={0} border={0}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td height={7} style={{ lineHeight: 0 }}>&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style={{ fontSize: '8pt', fontWeight: 'bold', margin: 0, color: '#174E86', lineHeight: 1.1 }}>Confidentiality Notes:</p>
                            <p style={{ fontSize: '7pt', fontWeight: 'bold', margin: 0, color: '#174E86', lineHeight: 1.1 }}>This email may contain confidential and/or private information.</p>
                            <p style={{ fontSize: '7pt', fontWeight: 'bold', margin: 0, color: '#174E86', lineHeight: 1.1 }}>If received in error, please delete it and notify the senders or&nbsp;<a href="https://forms.gle/dR5d8hG127kTiNWs8" target="_blank" rel="noopener noreferrer" style={{ color: '#C94749' }}>complaint</a>.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
};

export default SignatureIMS;