import signatureTemplateJSON from "@/assets/json/companyTemplateStatic.json";

function HSignatureTemplate(){
    return signatureTemplateJSON.map(item => ({
    ...item,
    value: String(item.value),
}));
};

export { HSignatureTemplate };