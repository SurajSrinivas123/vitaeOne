"use client";

import {
    Shield,
    Lock,
    FileCheck,
    Zap,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const features = [
    {
        icon: <Shield size={32} />,
        title: "Privacy First",
    },
    {
        icon: <Lock size={32} />,
        title: "No Account Required",
    },
    {
        icon: <FileCheck size={32} />,
        title: "ATS-Friendly Templates",
    },
    {
        icon: <Zap size={32} />,
        title: "Fast & Simple",
    },
];

export default function WhyVitaeOne() {
    return (
        <section className="privacy-section">

            <div className="container">

                <div className="section-heading">

                    <span className="section-badge">
                        Why VitaeOne
                    </span>

                    <h2 className="section-title">
                        Built Differently
                    </h2>

                </div>

                <div className="privacy-grid">

                    {features.map((feature, index) => (

                        <Reveal
                            key={feature.title}
                            delay={index * 150}
                        >

                            <div className="privacy-card-item">

                                {feature.icon}

                                <h3>{feature.title}</h3>

                            </div>

                        </Reveal>

                    ))}

                </div>

            </div>

        </section>
    );
}