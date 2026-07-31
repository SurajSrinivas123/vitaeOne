"use client";
import ResumeRenderer from "../resume/renderer/ResumeRenderer";
import { useResume } from "@/src/context/ResumeContext";

export default function ResumePreview() {

    const {
        resume,
        template,
    } = useResume();

    return (
        <ResumeRenderer
            data={resume}
            template={template}
        />
    );

}