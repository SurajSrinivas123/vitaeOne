"use client";

import {
    Heart,
    ShieldCheck,
    Rocket,
    Sparkles,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const items = [
    {
        icon: <Rocket size={34} />,
        title: "Independent Project",
        description:
            "VitaeOne is designed, developed, and maintained by a single developer with a focus on quality and simplicity.",
    },
    {
        icon: <ShieldCheck size={34} />,
        title: "Privacy First",
        description:
            "No accounts, no tracking, and no unnecessary data collection. Your support helps keep it that way.",
    },
    {
        icon: <Sparkles size={34} />,
        title: "Continuous Improvements",
        description:
            "Contributions help fund new templates, better features, performance improvements, and bug fixes.",
    },
    {
        icon: <Heart size={34} />,
        title: "Every Contribution Matters",
        description:
            "Whether it's a coffee or a meal, every contribution helps keep VitaeOne growing.",
    },
];

export default function WhySupport() {
    return (
        <section className="support-section">
            <div className="container">

                <Reveal>
                    <div className="support-heading">
                        <h2>Why Support VitaeOne?</h2>
                        <p>
                            Your support helps keep VitaeOne free, privacy-first,
                            and continuously improving.
                        </p>
                    </div>
                </Reveal>

                <div className="support-grid">
                    {items.map((item, index) => (
                        <Reveal key={item.title} delay={index * 150}>
                            <div className="support-card">
                                {item.icon}
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}