import { Fragment } from "react/jsx-runtime";
import SignatureAII from "../ui/SignatureAII";
import SignatureIMA from "../ui/SignatureIMA";

interface UserSignatureData {
  fullName: string;
  jobPosition: string;
  phone: string;
  email: string;
  template: string;
}

interface SignatureTemplateProps {
  userSignatureData: UserSignatureData;
}

function SignatureTemplate ({ userSignatureData }: SignatureTemplateProps) {
    const GenerateTemplate = (templateName: string) => {
      switch (templateName) {
        case "AII":
          return <SignatureAII userSignatureData={userSignatureData} />;
        // case "IMS":
        //   return;
        case "IMA":
          return <SignatureIMA userSignatureData={userSignatureData} />;
      };
      console.log(templateName);
      // return( 
      //   // if template code === 01 render SignatureIntcrews.tsx
      //   // if template code === 02 render SignatureAII.tsx
      //   // if template code === 03 render SignatureIMS.tsx
      //   // if template code === 04 render SignatureIMA.tsx
      //   <div></div>
      // )
    }
    return (
      <Fragment>
        <blockquote style={{fontFamily: "Arial, sans-serif", fontSize: "8pt", borderLeft: "4px solid #04AA6D", paddingLeft:"10px", margin:"0",lineHeight: "1.2", letterSpacing: "-0.4px"}}>
        Use <strong>Arial</strong> font with a <strong>11pt</strong> font size for the email body.<br/>
        If the listed job title does not apply to you, kindly contact the <strong>IT Department</strong> for assistance.<br/><strong>NOTE: Delete this message before saving your signature, with Best Regards at the start.</strong> 
        </blockquote>
        <br/>
        {GenerateTemplate(userSignatureData.template)}
      </Fragment>
      // <table cellSpacing="0" cellPadding="0" border={0}>
      //   <tbody>
      //     <tr>
      //       <td>
      //         <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12pt' }}>
      //           With Best Regards,<br /><br />
      //         </span>
      //         <table
      //           cellSpacing="0"
      //           cellPadding="0"
      //           border={0}
      //           style={{ fontFamily: 'Arial, sans-serif', color: '#1B1C1E' }}
      //         >
      //           <tbody>
      //             <tr>
      //               <td style={{ fontSize: '12pt', color: '#1B1C1E', paddingLeft: '5px', lineHeight: '1.1' }}>
      //                 <span style={{ fontWeight: 'bold', fontSize: '12pt', color: '#1E1364' }}>{userSignatureData.fullName}</span><br />
      //                 <span style={{ fontSize: '12pt', color: '#1E1364' }}>{userSignatureData.jobPosition}</span><br />
      //                 <span style={{ fontSize: '12pt', color: '#1B1C1E' }}>
      //                   <strong>O.</strong>&nbsp;
      //                   <a href="tel:+622138250011" style={{ color: '#1B1C1E', textDecoration: 'none' }}>
      //                     +62&nbsp;21&nbsp;38250011
      //                   </a>&nbsp;|&nbsp;
      //                   <strong>M.</strong>&nbsp;
      //                   <a href={`tel:${userSignatureData.phone}`} style={{ color: '#1B1C1E', textDecoration: 'none' }}>
      //                     {userSignatureData.phone}
      //                   </a>
      //                 </span><br />
      //                 <span style={{ fontSize: '12pt', color: '#1B1C1E' }}>
      //                   <strong>E.</strong>&nbsp;
      //                   <a href={`mailto:${userSignatureData.email}`} style={{ color: '#1E1364' }}>
      //                     {userSignatureData.email}
      //                   </a>
      //                 </span>
      //               </td>
      //             </tr>
      //             <tr>
      //               <td height="10" style={{ width: '100%', borderBottom: '1px solid #888888' }}></td>
      //             </tr>
      //             <tr>
      //               <td>
      //                 <table cellSpacing="0" cellPadding="0" border={0} width="100%">
      //                   <tbody>
      //                     <tr>
      //                       <td height="7"></td>
      //                     </tr>
      //                     <tr>
      //                       <td width="50">
      //                         <img
      //                           src="https://i-mitrastrategis.com/images/e-signature/augustea_logo.png"
      //                           alt="company"
      //                           {...{ border: "0" }}
      //                           style={{ width: '50px', paddingRight: '5px' }}
      //                         />
      //                       </td>
      //                       <td width="5">
      //                         <span>&nbsp;</span>
      //                       </td>
      //                       <td>
      //                         <table cellSpacing="0" cellPadding="0" border={0}>
      //                           <tbody>
      //                             <tr>
      //                               <td
      //                                 style={{
      //                                   fontWeight: 'bold',
      //                                   fontSize: '10pt',
      //                                   color: '#1B1C1E',
      //                                   whiteSpace: 'nowrap',
      //                                 }}
      //                               >
      //                                 AUGUSTEA INTCREWS&nbsp;
      //                                 <span style={{ color: '#1B1C1E', fontWeight: 'lighter' }}>INDONESIA</span>
      //                               </td>
      //                             </tr>
      //                             <tr>
      //                               <td style={{ fontSize: '10pt', color: '#666666', whiteSpace: 'nowrap', lineHeight: '1', paddingBottom: '5px'}}>
      //                                 Navigated By People
      //                               </td>
      //                             </tr>
      //                             <tr>
      //                               <td colSpan={2} align="right" style={{ whiteSpace: 'nowrap' }}>
      //                                 <table cellSpacing="0" cellPadding="0" border={0}>
      //                                   <tbody>
      //                                     <tr>
      //                                       {[
      //                                         { url: 'https://g.co/kgs/2L2F7XH', icon: 'maps_icon.png' },
      //                                         { url: 'https://augustea-ics.com/', icon: 'website_icon.png' },
      //                                         { url: 'https://www.instagram.com/augustea_intcrews', icon: 'instagram_icon.png' },
      //                                         { url: 'https://www.tiktok.com/@augustea_intcrews', icon: 'tiktok_icon.png' },
      //                                         { url: 'https://www.linkedin.com/in/pt-augustea-intcrews-indonesia-b12021301', icon: 'linkedIn_icon.png' },
      //                                       ].map((item, index) => (
      //                                         <td key={index} style={{ paddingRight: '3px' }}>
      //                                           <a href={item.url} target="_blank" rel="noopener noreferrer">
      //                                             <img
      //                                               src={`https://i-mitrastrategis.com/images/e-signature/${item.icon}`}
      //                                               alt={item.icon}
      //                                               width="20"
      //                                               height="20"
      //                                             />
      //                                           </a>
      //                                         </td>
      //                                       ))}
      //                                     </tr>
      //                                   </tbody>
      //                                 </table>
      //                               </td>
      //                             </tr>
      //                           </tbody>
      //                         </table>
      //                       </td>
      //                     </tr>
      //                   </tbody>
      //                 </table>
      //               </td>
      //             </tr>
      //             <tr>
      //               <td height="10"></td>
      //             </tr>
      //           </tbody>
      //         </table>
      //         <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12pt', fontWeight: 'bold', margin: '0', color: '#1B1C1E', lineHeight: '1.1' }}>
      //           Confidentiality Notes:
      //         </p>
      //         <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12pt', margin: '0', color: '#1B1C1E', lineHeight: '1.1' }}>
      //           This email may contain confidential and/or private information.
      //         </p>
      //         <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12pt', margin: '0', color: '#1B1C1E', lineHeight: '1.1' }}>
      //           If you have received this email in error, please delete the message and notify the senders or{' '}
      //           <a href="https://g.co/kgs/FiqBTxA" target="_blank" rel="noopener noreferrer" style={{ color: '#99005D' }}>
      //             complaint
      //           </a>
      //           .
      //         </p>
      //       </td>
      //     </tr>
      //   </tbody>
      // </table>
    );
  };
  
  export default SignatureTemplate;