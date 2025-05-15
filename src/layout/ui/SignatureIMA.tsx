import { Fragment } from "react/jsx-runtime";

interface UserSignatureData {
    fullName: string;
    jobPosition: string;
    phone: string;
    email: string;
};

interface SignatureTemplateProps {
    userSignatureData: UserSignatureData;
};

function SignatureIMA ({userSignatureData}:SignatureTemplateProps) {
    return(
        <Fragment>
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10pt' }}>Best Regards,<br /><br /></span>
            <table cellSpacing="0" cellPadding="0" border={0} style={{ fontFamily: 'Arial, sans-serif', fontSize: '10pt' }}>
                <tbody>
                    <tr>
                        <td>
                            <table cellSpacing="0" cellPadding="0" border={0} width={"450pt"} style={{ fontFamily: 'Arial, sans-serif', color: "#365992"}}>
                                <tbody>
                                    <tr>
                                        <td align="left">
                                            &nbsp; {/* spacer */}
                                            <img src="https://i-mitrastrategis.com/images/e-signature/ima-company/logo_primary.png" alt="company" style={{ maxWidth: '175px', height: 'auto', paddingRight: '5px' }}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} width={"250pt"} height="5" style={{ borderBottom: '1px solid #888888'}}>
                                            <span>&nbsp;</span>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td height="10"></td>
                                    </tr> */}
                                    <tr>
                                        <td height={"5"} style={{ verticalAlign: 'top', lineHeight: '1' }}>
                                            <span>&nbsp;</span>
                                        </td> 
                                    </tr>
                                    <tr>
                                        {/* table for employee profile */}
                                        <td width={"250pt"} style={{ paddingLeft: '5px', verticalAlign: 'top', lineHeight: 1 }}>

                                            <span style={{ fontWeight: 'bold', fontSize: '9pt', whiteSpace: 'nowrap', letterSpacing: '-0.3px' }}>{userSignatureData.fullName}</span><br />
                                            <span style={{ fontSize: '9pt', letterSpacing: '-0.3px', paddingBottom: "15px"}}>{userSignatureData.jobPosition}</span><br />

                                            <table cellPadding={0} cellSpacing={0} border={0}>
                                                <tbody>
                                                    <tr>
                                                        <td height={7} style={{ lineHeight: 0 }}>&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>





                                            <span style={{ letterSpacing: '-0.3px' }}>
                                                <span style={{ fontWeight: 'bold', fontSize: '9pt' }}>O.</span>&nbsp;<a href="tel:+622138250011" style={{ color: '#365992', textDecoration: 'none', fontSize: '9pt' }}>+62&nbsp;21&nbsp;38250011</a><br />
                                                <span style={{ fontWeight: 'bold', fontSize: '9pt' }}>M.</span>&nbsp;<a href={`tel:${userSignatureData.phone}`} style={{ color: '#365992', textDecoration: 'none', fontSize: '9pt' }}>{userSignatureData.phone}</a><br />
                                            </span>
                                            <span style={{ fontSize: '9pt', letterSpacing: '-0.3px' }}>
                                                <span style={{ fontWeight: 'bold' }}>E.</span>&nbsp;<a href={`mailto:${userSignatureData.email}`} style={{ color: '#365992' }}>{userSignatureData.email}</a>
                                            </span>

                                            {/* <table cellPadding="0" cellSpacing="0" border={0}>
                                                <tbody>
                                                    <tr>
                                                        <td height="5" style={{ fontSize: '6pt'}}>
                                                            <span>&nbsp;</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ fontSize: '9pt', letterSpacing: '-0.3px'}}>
                                                            <table cellPadding="0" cellSpacing="0" border={0} style={{}}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ fontWeight: 'bold', fontSize: '9pt', lineHeight: 1.2}}>O.</td>
                                                                        <td style={{lineHeight: 1.2}}>&nbsp;</td>
                                                                        <td style={{lineHeight: 1.2, color: "#365992"}}>
                                                                            <a href="tel:+622138250011" style={{ color: '#365992', textDecoration: 'none', fontSize: '9pt' }}><span style={{color: '#365992'}}>+62&nbsp;21&nbsp;38250011</span></a>
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                    <tr>
                                                                        <td style={{ fontWeight: 'bold', fontSize: '9pt', lineHeight: 1.2}}>M.</td>
                                                                        <td style={{lineHeight: 1.2}}>&nbsp;</td>
                                                                        <td style={{lineHeight: 1.2}}>
                                                                            <a href={`tel:${userSignatureData.phone}`} style={{ color: '#365992', textDecoration: 'none', fontSize: '9pt' }}>{userSignatureData.phone}</a>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td style={{ fontWeight: 'bold', fontSize: '9pt', lineHeight: 1.2 }}>E.</td>
                                                                        <td style={{lineHeight: 1.2}}>&nbsp;</td>
                                                                        <td style={{lineHeight: 1.2}}>
                                                                            <a href={`mailto:${userSignatureData.email}`} style={{ color: '#365992', textDecoration: 'none', fontSize: '9pt' }}>{userSignatureData.email}</a>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>

                                            </table> */}

                                        </td>

                                        {/* table for company profile */}
                                        <td style={{ verticalAlign: 'top', lineHeight: 1 }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '9pt', whiteSpace: 'nowrap', letterSpacing: '-0.3px' }}>Indonesian Maritime Academy</span><br />
                                            <span style={{ fontSize: '9pt' }}>
                                                Menara Tendean, 28Fl,<br />Jl. Kapten Tendean No.20C,<br />Jakarta Sel., DKI Jakarta 12790<br />
                                            </span>
                                            <table cellPadding={0} cellSpacing={0} border={0} style={{ fontSize: '8pt'}}>
                                                <tbody>
                                                    <tr>
                                                        <td height={"6"}></td>
                                                    </tr>
                                                    <tr>
                                                        <td height={"6"}></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table cellSpacing={0} cellPadding={0} border={0} width={"100%"}>
                                                                <tbody>
                                                                    {/* Social Media Icons Aligned in The Right Side */}
                                                                    <tr>
                                                                        <td colSpan={2} align="left" style={{whiteSpace: 'nowrap'}}>
                                                                            <table cellSpacing={0} cellPadding={0} border={0}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        {[
                                                                                            { url: 'https://i-maritimeacademy.com', icon: 'website_icon.png' },
                                                                                            { url: 'https://www.instagram.com/maritimeacademy.id', icon: 'instagram_icon.png' },
                                                                                            { url: 'https://www.tiktok.com/@maritimeacademy.id', icon: 'tiktok_icon.png' },
                                                                                            { url: 'https://www.linkedin.com/in/maratime-academy-973078364', icon: 'linkedIn_icon.png' },
                                                                                        ].map((item, index) => (
                                                                                        <td key={index} style={{ paddingRight: '3px' }}>
                                                                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                                                                <img src={`https://i-mitrastrategis.com/images/e-signature/ima-company/${item.icon}`} alt={item.icon} width={17} height={17}/>
                                                                                            </a>
                                                                                        </td>
                                                                                        ))}
                                                                                        <td width={"5"}>
                                                                                            <span>&nbsp;</span> {/* spacer */}
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        {/* {[
                                                                            { url: 'https://i-maritimeacademy.com', icon: 'website_icon.png' },
                                                                            { url: 'https://www.instagram.com/maritimeacademy.id', icon: 'instagram_icon.png' },
                                                                            { url: 'https://www.tiktok.com/@maritimeacademy.id', icon: 'tiktok_icon.png' },
                                                                            { url: 'https://www.linkedin.com/in/maratime-academy-973078364', icon: 'linkedIn_icon.png' },
                                                                        ].map((item, index) => (
                                                                            <td key={index} style={{ paddingRight: '3px' }}>
                                                                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                                                    <img src={`https://i-mitrastrategis.com/images/e-signature/ima-company/${item.icon}`} alt={item.icon} width={17} height={17}/>
                                                                                </a>
                                                                            </td>
                                                                        ))}
                                                                        <td width="5">
                                                                            <span>&nbsp;</span>
                                                                        </td> */}
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
                                        <td height={"5"} style={{verticalAlign:"top", lineHeight: "1"}} >
                                            <span>&nbsp;</span> {/* spacer */}
                                        </td>     
                                    </tr> 
                                </tbody>
                            </table>
                            <p style={{ fontSize: '8pt', fontWeight: 'bold', margin: 0, color: '#365992', lineHeight: 1.1 }}>Confidentiality Notes:</p>
                            <p style={{ fontSize: '7pt', fontWeight: 'bold', margin: 0, color: '#365992', lineHeight: 1.1 }}>This email may contain confidential and/or private information.</p>
                            <p style={{ fontSize: '7pt', fontWeight: 'bold', margin: 0, color: '#365992', lineHeight: 1.1 }}>If received in error, please delete it and notify the senders or&nbsp;<a href="https://forms.gle/dR5d8hG127kTiNWs8" target="_blank" rel="noopener noreferrer" style={{ color: '#C94749' }}>complaint</a>.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
};

export default SignatureIMA;