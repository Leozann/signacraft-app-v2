import { Fragment } from "react/jsx-runtime";
import SignatureAII from "../ui/SignatureAII";
import SignatureIMS from "../ui/SignatureIMS";
import SignatureIMA from "../ui/SignatureIMA";
import { InputFormat } from "@/function/utils/inputUtils";
import { IFormData } from "@/function/types/form";

interface SignatureTemplateProps {
  userSignatureData: IFormData;
}

function SignatureTemplate({ userSignatureData }: SignatureTemplateProps) {
  const updateSignatureName = (fullName: string): string => {

    return InputFormat("fullNameAbbreviation", fullName);
  };

  const formattedSignatureData: IFormData = {
    ...userSignatureData,
    fullName: updateSignatureName(userSignatureData.fullName),
  };
  const GenerateTemplate = (templateName: string) => {
    // console.log(formattedSignatureData);
    switch (templateName) {
      case "AII":
        return <SignatureAII userSignatureData={formattedSignatureData} />;
      case "IMS":
        return <SignatureIMS userSignatureData={formattedSignatureData} />;
      case "IMA":
        return <SignatureIMA userSignatureData={formattedSignatureData} />;
    };
    console.log(templateName);
  }
  return (
    <Fragment>
      <blockquote style={{ fontFamily: "Arial, sans-serif", fontSize: "8pt", borderLeft: "4px solid #04AA6D", paddingLeft: "10px", margin: "0", lineHeight: "1.2", letterSpacing: "-0.4px" }}>
        Do not modify the template structure or content unless a new version has been officially issued<br />Use <strong>Arial</strong> font with a <strong>11pt</strong> font size for the email body.<br />
        If the listed job title does not apply to you, kindly contact the <strong>IT Department</strong> for assistance.<br /><strong>NOTE: Delete this message before saving your signature, with Best Regards at the start.</strong>
      </blockquote>
      <br />
      {GenerateTemplate(userSignatureData.template)}
    </Fragment>
  );
};

export default SignatureTemplate;