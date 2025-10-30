import { Fragment } from "react/jsx-runtime";
import { IFormData } from "@/function/types/form";

interface SignatureTemplateProps {
    userSignatureData: IFormData;
};

function SignatureICS({ userSignatureData }: SignatureTemplateProps) {
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
                                            <span style={{ fontWeight: 'bold', fontSize: '10pt', color: '#763E9B', letterSpacing: '-0.3px' }}>{userSignatureData.fullName}</span><br />
                                            <span style={{ fontSize: '10pt', color: '#763E9B', letterSpacing: '-0.3px' }}>{userSignatureData.jobPosition}</span><br />
                                            <span style={{ fontSize: '10pt', color: '#1B1C1E', letterSpacing: '-0.3px' }}>
                                                <strong style={{ color: '#763E9B' }}>O.</strong>&nbsp;
                                                <a href="tel:+622138250011" style={{ color: '#763E9B', textDecoration: 'none' }}>
                                                    +62&nbsp;21&nbsp;38250011
                                                </a>&nbsp;|&nbsp;
                                                <strong style={{ color: '#763E9B' }}>M.</strong>&nbsp;
                                                <a href={`tel:${userSignatureData.phone}`} style={{ color: '#763E9B', textDecoration: 'none' }}>
                                                    {userSignatureData.phone}
                                                </a>
                                            </span><br />
                                            <span style={{ fontSize: '10pt', color: '#763E9B', letterSpacing: '-0.3px' }}>
                                                <strong style={{ color: '#763E9B' }}>E.</strong>&nbsp;
                                                <a href={`mailto:${userSignatureData.email}`} style={{ color: '#763E9B' }}>
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
                                                                src="https://i-mitrastrategis.com/images/e-signature/ics-company/company_logo.png"
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
                                                                                color: '#763E9B',
                                                                                whiteSpace: 'nowrap',
                                                                                letterSpacing: '-0.3px'
                                                                            }}
                                                                        >
                                                                            &nbsp;INTERNATIONAL&nbsp;
                                                                            <span style={{ color: '#763E9B', fontWeight: 'lighter', letterSpacing: '-0.3px' }}>CREW SERVICE</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '9pt', color: '#763E9B', whiteSpace: 'nowrap', lineHeight: '0.5', paddingBottom: '5px', letterSpacing: '-0.3px' }}>
                                                                            &nbsp;Freedom To Flourish
                                                                        </td>
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

                                                                    <td style={{ fontSize: '9pt', color: '#763E9B', lineHeight: '1.4', verticalAlign: 'top' }}>
                                                                        <table
                                                                            cellPadding="0"
                                                                            cellSpacing="0"
                                                                            border={0}
                                                                            style={{ lineHeight: '1.2', fontSize: '9pt', color: '#763E9B' }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style={{ whiteSpace: 'nowrap' }}><strong>&nbsp;Menara Tendean, 28Fl</strong></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style={{ whiteSpace: 'nowrap' }}>&nbsp;Jl. Kapten Tendean No.20C</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style={{ whiteSpace: 'nowrap' }}>&nbsp;Jakarta Sel., DKI Jakarta 12790</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
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
                            <p style={{ fontSize: '8pt', fontWeight: 'bold', margin: 0, color: '#763E9B', lineHeight: 1.1 }}>Confidentiality Notes:</p>
                            <p style={{ fontSize: '7pt', fontWeight: 'bold', margin: 0, color: '#763E9B', lineHeight: 1.1 }}>This email may contain confidential and/or private information.</p>
                            {/* <p style={{ fontSize: '7pt', fontWeight: 'bold', margin: 0, color: '#763E9B', lineHeight: 1.1 }}>If received in error, please delete it and notify the senders or&nbsp;<a href="https://forms.gle/dR5d8hG127kTiNWs8" target="_blank" rel="noopener noreferrer" style={{ color: '#99005D' }}>complaint</a>.</p> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
};

export default SignatureICS;