import Modern from "../templates/modern/Modern";
import Minimal from "../templates/minimal/Minimal";
import Executive from "../templates/executive/Executive";
import { ResumeData } from "../types/resume";
import { paginate } from "../engine/paginate";
import { paginateMinimal } from "../engine/paginateMinimal";
import { ResumeTemplate } from "@/lib/templates";

interface ResumeRendererProps {
    data: ResumeData;
    template?: ResumeTemplate;
}

export default function ResumeRenderer({
    data,
    template = "modern",
}: ResumeRendererProps) {
    const pages =
        template === "minimal"
            ? paginateMinimal(data)
            : paginate(data);

    return (
        <div id="resume-preview">
            {pages.map((page, index) => (
                <div
                    key={page.id}
                    className="resume-paper"
                >
                    {template === "modern" && (
                        <Modern
                            data={data}
                            blocks={page.blocks}
                        />
                    )}

                    {template === "minimal" && (
                        <Minimal
                            data={data}
                            leftBlocks={page.leftBlocks}
                            rightBlocks={page.rightBlocks}
                            showHeader={index === 0}
                        />
                    )}

                    {template === "executive" && (
                        <Executive
                            data={data}
                            blocks={page.blocks}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}