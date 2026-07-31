"use client";

import {
    TriangleAlert,
    Database,
    CreditCard,
    Eye,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const risks = [
    {
        icon: <Database size={32} />,
        title: "Personal Data Stored Online",
        description:
            "Many resume builders store resumes on remote servers. Depending on the service, your personal information may remain available until you delete it according to their policies.",
    },
    {
        icon: <CreditCard size={32} />,
        title: "Unexpected Paywalls",
        description:
            "Some services let you spend time creating a resume before requiring payment to download or export it. It's worth checking pricing before investing your time.",
    },
    {
        icon: <Eye size={32} />,
        title: "Tracking & Analytics",
        description:
            "Many websites use analytics and tracking tools to understand usage. If privacy matters to you, it's worth understanding how your information is collected and used.",
    },
];

export default function PrivacyRisks() {
    return (
        <section className="privacy-section">

            <div className="container">

                <div className="section-heading">

                    <span className="section-badge">
                        Stay Informed
                    </span>

                    <h2 className="section-title">
                        Common Privacy Considerations
                    </h2>

                    <p className="privacy-intro">
                        Before using any online resume builder, it's worth
                        understanding how your information may be handled.
                    </p>

                </div>

                <div className="privacy-grid">

                    {risks.map((risk, index) => (

                        <Reveal
                            key={risk.title}
                            delay={index * 150}
                        >

                            <div className="privacy-card-item">

                                {risk.icon}

                                <h3>{risk.title}</h3>

                                <p>{risk.description}</p>

                            </div>

                        </Reveal>

                    ))}

                </div>

            </div>

        </section>
    );
}