"use client";

import {
    UserX,
    HardDrive,
    Wallet,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const items = [
    {
        icon: <UserX size={34} />,
        title: "No Account Required",
        description:
            "Create your resume without creating an account or sharing your email address.",
    },
    {
        icon: <HardDrive size={34} />,
        title: "Your Data Stays With You",
        description:
            "Your resume is stored locally in your browser unless you choose otherwise.",
    },
    {
        icon: <Wallet size={34} />,
        title: "Free to Use",
        description:
            "No hidden subscriptions or unexpected paywalls for basic resume creation.",
    },
];

export default function DataControl() {
    return (
        <section className="privacy-section">

            <div className="container">

                <Reveal>
                    <div className="section-heading">

                        <span className="section-badge">
                            Your Data
                        </span>

                        <h2 className="section-title">
                            You Stay in Control
                        </h2>

                    </div>
                </Reveal>

                <div className="privacy-grid">

                    {items.map((item, index) => (
                        <Reveal
                            key={item.title}
                            delay={index * 150}
                        >
                            <div className="privacy-card-item">

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