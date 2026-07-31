"use client";

import {
    GraduationCap,
    Code2,
    Search,
    FileText,
    Rocket,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const timeline = [
    {
        icon: <GraduationCap size={22} />,
        title: "The Beginning",
        description:
            "My journey into software development began with a curiosity to understand how modern applications are built. That curiosity soon turned into a passion for creating meaningful digital experiences.",
    },
    {
        icon: <Code2 size={22} />,
        title: "Learning by Building",
        description:
            "I spent countless hours building projects, experimenting with new technologies, and improving my skills in full-stack development. Every project taught me something new.",
    },
    {
        icon: <Search size={22} />,
        title: "Identifying the Problem",
        description:
            "While helping friends prepare for job applications, I noticed that many resume builders required sign-ups, tracked user data, or charged for basic features. It didn't feel right.",
    },
    {
        icon: <FileText size={22} />,
        title: "Building VitaeOne",
        description:
            "I decided to build a resume builder that respects privacy, works without unnecessary accounts, and produces professional ATS-friendly resumes—all while remaining simple to use.",
    },
    {
        icon: <Rocket size={22} />,
        title: "Looking Ahead",
        description:
            "VitaeOne continues to grow with new templates, better customization, and improved accessibility. My goal is to make it one of the best free resume builders available.",
    },
];

export default function Story() {
    return (
        <section className="story">
            <div className="container">

                <div className="story-header">

                    <span className="section-badge">
                        My Journey
                    </span>

                    <h2 className="section-title">
                        The Story Behind VitaeOne
                    </h2>

                    <p className="story-intro">
                        Every project has a beginning. Here's how VitaeOne
                        came to life.
                    </p>

                </div>

                <div className="timeline">

                    {timeline.map((item, index) => (
                        <Reveal
                            key={index}
                            delay={index * 150}
                        >
                            <div className="timeline-item">


                                <div className="timeline-icon">
                                    {item.icon}
                                </div>

                                <div className="timeline-content">

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                </div>
                            </div>
                        </Reveal>
                    ))}

                </div>

            </div>
        </section >
    );
}