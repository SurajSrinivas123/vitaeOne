import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import Toolbar from "./Toolbar";
import VideoOverlay from "./VideoOverlay";

import { ResumeProvider } from "@/src/context/ResumeContext";
import { ResumeTemplate } from "@/src/lib/templates";

interface BuilderLayoutProps {
    initialTemplate?: ResumeTemplate;
}

export default function BuilderLayout({ initialTemplate }: BuilderLayoutProps) {
    return (
        <ResumeProvider initialTemplate={initialTemplate}>

            <main className="builder">

                <VideoOverlay />

                <Toolbar />

                <div className="builder-content">

                    <aside className="builder-sidebar">
                        <ResumeForm />
                    </aside>

                    <section className="builder-preview">
                        <ResumePreview />
                    </section>

                </div>

            </main>

        </ResumeProvider>
    );
}