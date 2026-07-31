import ModernPdf from "./ModernPdf";
import MinimalPdf from "./MinimalPdf";
import ExecutivePdf from "./ExecutivePdf";

import { ResumeData } from "../types/resume";
import { ResumeTemplate } from "@/lib/templates";



// Temp

import { Font } from "@react-pdf/renderer";

Font.registerHyphenationCallback(word => [word]);

// Temp close





interface PdfRendererProps {
    data: ResumeData;
    template: ResumeTemplate;
}

export default function PdfRenderer({
    data,
    template,
}: PdfRendererProps) {

    switch (template) {

        case "minimal":
            return <MinimalPdf data={data} />;

        case "modern":
            return <ModernPdf data={data} />;

        case "executive":
            return <ExecutivePdf data={data} />;

        default:
            return <ModernPdf data={data} />;
    }

}