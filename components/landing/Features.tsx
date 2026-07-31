import {
    ShieldCheck,
    FileText,
    Download,
    LayoutTemplate,
    HardDrive,
    Wallet,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";




const features = [
    {
        icon: ShieldCheck,
        title: "Privacy First",
        description:
            "Your resume never leaves your device. No accounts, no tracking, no cloud storage.",
    },
    {
        icon: FileText,
        title: "ATS Friendly",
        description:
            "Professionally structured templates designed to work with modern applicant tracking systems.",
    },
    {
        icon: Download,
        title: "Export as PDF",
        description:
            "Generate a clean, high-quality PDF instantly with a single click.",
    },
    {
        icon: LayoutTemplate,
        title: "Multiple Templates",
        description:
            "Switch between modern templates without rewriting your resume.",
    },
    {
        icon: HardDrive,
        title: "Local Storage",
        description:
            "Your progress is automatically saved in your browser for future editing.",
    },
    {
        icon: Wallet,
        title: "Completely Free",
        description:
            "No subscriptions, hidden fees, or premium paywalls.",
    },
];

export default function Features() {
    return (
        <section className="features section">
            <div className="container">

                <Reveal>

                    <div className="section-header">

                        <span className="section-badge">
                            Features
                        </span>

                        <h2 className="section-title">
                            Everything You Need to Build a Professional Resume
                        </h2>

                        <p className="section-description">
                            VitaeOne provides all the tools you need to create
                            beautiful, ATS-friendly resumes while keeping your
                            personal information completely private.
                        </p>

                    </div>

                </Reveal>

                <div className="features-grid">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (


                            <Reveal
                                key={feature.title}
                                delay={index * 80}
                            >

                                <article
                                    key={feature.title}
                                    className="feature-card"
                                >

                                    <div className="feature-icon">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="feature-title">
                                        {feature.title}
                                    </h3>

                                    <p className="feature-description">
                                        {feature.description}
                                    </p>

                                </article>

                            </Reveal>





                        );
                    })}

                </div>

            </div>
        </section>
    );
}