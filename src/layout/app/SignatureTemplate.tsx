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
    );
  };
  
  export default SignatureTemplate;