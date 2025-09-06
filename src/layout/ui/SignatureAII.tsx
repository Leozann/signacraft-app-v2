import { Fragment } from "react/jsx-runtime";
import { IFormData } from "@/function/types/form";

interface SignatureTemplateProps {
    userSignatureData: IFormData;
};

function SignatureAII({ userSignatureData }: SignatureTemplateProps) {
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
                                            <span style={{ fontWeight: 'bold', fontSize: '10pt', color: '#1E1364', letterSpacing: '-0.3px' }}>{userSignatureData.fullName}</span><br />
                                            <span style={{ fontSize: '10pt', color: '#1E1364', letterSpacing: '-0.3px' }}>{userSignatureData.jobPosition}</span><br />
                                            <span style={{ fontSize: '10pt', color: '#1B1C1E', letterSpacing: '-0.3px' }}>
                                                <strong style={{ color: '#1E1364' }}>O.</strong>&nbsp;
                                                <a href="tel:+622138250011" style={{ color: '#1E1364', textDecoration: 'none' }}>
                                                    +62&nbsp;21&nbsp;38250011
                                                </a>&nbsp;|&nbsp;
                                                <strong style={{ color: '#1E1364' }}>M.</strong>&nbsp;
                                                <a href={`tel:${userSignatureData.phone}`} style={{ color: '#1E1364', textDecoration: 'none' }}>
                                                    {userSignatureData.phone}
                                                </a>
                                            </span><br />
                                            <span style={{ fontSize: '10pt', color: '#1B1C1E', letterSpacing: '-0.3px' }}>
                                                <strong style={{ color: '#1E1364' }}>E.</strong>&nbsp;
                                                <a href={`mailto:${userSignatureData.email}`} style={{ color: '#1E1364' }}>
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
                                                        <td width="50">
                                                            <img
                                                                src="https://i-mitrastrategis.com/images/e-signature/augustea_logo.png"
                                                                alt="company"
                                                                {...{ border: "0" }}
                                                                style={{ width: '50px', paddingRight: '5px' }}
                                                            />
                                                        </td>
                                                        <td width="5">
                                                            <span>&nbsp;</span>
                                                        </td>
                                                        <td>
                                                            <table cellSpacing="0" cellPadding="0" border={0}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td
                                                                            style={{
                                                                                fontWeight: 'bold',
                                                                                fontSize: '9pt',
                                                                                color: '#1E1364',
                                                                                whiteSpace: 'nowrap',
                                                                                letterSpacing: '-0.3px'
                                                                            }}
                                                                        >
                                                                            AUGUSTEA INTCREWS&nbsp;
                                                                            <span style={{ color: '#1E1364', fontWeight: 'lighter', letterSpacing: '-0.3px' }}>INDONESIA</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '9pt', color: '#1E1364', whiteSpace: 'nowrap', lineHeight: '1', paddingBottom: '5px', letterSpacing: '-0.3px' }}>
                                                                            Navigated By People
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

                                                                    <tr>
                                                                        <td colSpan={2} align="right" style={{ whiteSpace: 'nowrap' }}>
                                                                            <table cellSpacing="0" cellPadding="0" border={0}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        {[
                                                                                            { url: 'https://g.co/kgs/2L2F7XH', icon: 'maps_icon.png' },
                                                                                            { url: 'https://augustea-ics.com/', icon: 'website_icon.png' },
                                                                                            { url: 'https://www.instagram.com/augustea_intcrews', icon: 'instagram_icon.png' },
                                                                                            { url: 'https://www.tiktok.com/@augustea_intcrews', icon: 'tiktok_icon.png' },
                                                                                            { url: 'https://www.linkedin.com/in/pt-augustea-intcrews-indonesia-b12021301', icon: 'linkedIn_icon.png' },
                                                                                        ].map((item, index) => (
                                                                                            <td key={index} style={{ paddingRight: '3px' }}>
                                                                                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                                                                    <img
                                                                                                        src={`https://i-mitrastrategis.com/images/e-signature/${item.icon}`}
                                                                                                        alt={item.icon}
                                                                                                        width="17"
                                                                                                        height="17"
                                                                                                    />
                                                                                                </a>
                                                                                            </td>
                                                                                        ))}
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

                            <p style={{ fontSize: '8pt', fontWeight: 'bold', margin: 0, color: '#1E1364', lineHeight: 1.1 }}>Confidentiality Notes:</p>
                            <p style={{ fontSize: '7pt', fontWeight: 'bold', margin: 0, color: '#1E1364', lineHeight: 1.1 }}>This email may contain confidential and/or private information.</p>
                            <p style={{ fontSize: '7pt', fontWeight: 'bold', margin: 0, color: '#1E1364', lineHeight: 1.1 }}>If received in error, please delete it and notify the senders or&nbsp;<a href="https://forms.gle/dR5d8hG127kTiNWs8" target="_blank" rel="noopener noreferrer" style={{ color: '#99005D' }}>complaint</a>.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
};

export default SignatureAII;