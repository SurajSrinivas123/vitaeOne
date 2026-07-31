"use client";

import {
    createContext,
    useContext,
    useMemo,
    useState,
    ReactNode,
} from "react";

import { ResumeData } from "@/components/resume/types/resume";
import { sampleResume } from "@/components/resume/data/sampleResume";
import { ResumeTemplate } from "@/src/lib/templates";

interface ResumeContextType {
    resume: ResumeData;
    setResume: React.Dispatch<React.SetStateAction<ResumeData>>;

    template: ResumeTemplate;
    setTemplate: React.Dispatch<React.SetStateAction<ResumeTemplate>>;
}

const ResumeContext = createContext<ResumeContextType | null>(null);

export function ResumeProvider({
    children,
    initialTemplate,
}: {
    children: ReactNode;
    initialTemplate?: ResumeTemplate;
}) {

    const [resume, setResume] = useState<ResumeData>(sampleResume);

    const [template, setTemplate] =
        useState<ResumeTemplate>(initialTemplate ?? "modern");

    const value = useMemo(
        () => ({
            resume,
            setResume,
            template,
            setTemplate,
        }),
        [resume, template]
    );

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    );
}

export function useResume() {

    const context = useContext(ResumeContext);

    if (!context) {
        throw new Error(
            "useResume must be used inside ResumeProvider."
        );
    }

    return context;
}
