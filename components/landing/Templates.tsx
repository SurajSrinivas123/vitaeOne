import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const templates = [
    {
        id: "modern",
        name: "Modern",
        description: "Clean layout with a professional appearance.",
        image: "/images/modern.png",
    },
    {
        id: "minimal",
        name: "Minimal",
        description: "Simple, elegant and recruiter friendly.",
        image: "/images/minimal.png",
    },
    {
        id: "executive",
        name: "Executive",
        description: "Designed for experienced professionals.",
        image: "/images/executive.png",
    },
];

export default function Templates() {
    return (
        <section className="templates section">
            <div className="container">




                <Reveal>

                    <div className="section-header">

                        <span className="section-badge">
                            Templates
                        </span>

                        <h2 className="section-title">
                            Choose a Template You Like
                        </h2>

                        <p className="section-description">
                            Start with any template and switch designs anytime
                            without losing your resume content.
                        </p>

                    </div>

                </Reveal>





                <div className="templates-grid">

                    {templates.map((template, index) => (



                        <Reveal
                            key={template.id}
                            delay={index * 100}
                        >


                            <article
                                key={template.id}
                                className="template-card"
                            >

                                <div className="template-preview">
                                    {template.id === "modern" && (
                                        <Image
                                            src="/images/modern.png"
                                            alt="Modern Resume Template"
                                            width={300}
                                            height={420}
                                            className="template-image"
                                        />
                                    )}

                                    {template.id === "minimal" && (
                                        <Image
                                            src="/images/minimal.png"
                                            alt="Minimal Resume Template"
                                            width={300}
                                            height={420}
                                            className="template-image"
                                        />
                                    )}

                                    {template.id === "executive" && (
                                        <Image
                                            src="/images/executive.png"
                                            alt="Executive Resume Template"
                                            width={300}
                                            height={420}
                                            className="template-image"
                                        />
                                    )}


                                </div>

                                <div className="template-content">

                                    <h3>
                                        {template.name}
                                    </h3>

                                    <p>
                                        {template.description}
                                    </p>

                                    <Link
                                        href={`/builder?template=${template.id}`}
                                        className="primary-button"
                                    >
                                        Use Template
                                    </Link>

                                </div>

                            </article>



                        </Reveal>









                    ))}

                </div>

            </div>
        </section>
    );
}