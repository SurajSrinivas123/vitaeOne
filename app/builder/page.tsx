import BuilderLayout from "@/components/builder/BuilderLayout";

import { RESUME_TEMPLATES, ResumeTemplate } from "@/src/lib/templates";

interface BuilderPageProps {
    searchParams: Promise<{ template?: string }>;
}

export default async function BuilderPage({ searchParams }: BuilderPageProps) {
    const params = await searchParams;

    const validIds = RESUME_TEMPLATES.map((t) => t.id);
    const initialTemplate: ResumeTemplate = validIds.includes(
        params.template as ResumeTemplate
    )
        ? (params.template as ResumeTemplate)
        : "modern";

    return <BuilderLayout initialTemplate={initialTemplate} />;
}
