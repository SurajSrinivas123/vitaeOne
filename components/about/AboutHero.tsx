"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="about">
            <div className="container about-container">

                {/* Left */}

                <div className="about-content reveal-left">

                    <span className="section-badge">
                        About
                    </span>

                    <h1 className="section-title">
                        Hi, I'm Suraj Srinivas.
                    </h1>

                    <p className="about-description">
                        I'm a software developer with a passion for building
                        products that solve real problems. I enjoy creating
                        applications that are simple to use, thoughtfully
                        designed, and built with privacy in mind.
                    </p>

                    <p className="about-description">
                        VitaeOne started from a simple observation - many resume
                        builders ask users to create accounts, collect personal
                        information, or lock essential features behind
                        subscriptions. I wanted to build something different:
                        a resume builder that anyone could use without giving
                        up control of their data.
                    </p>

                    <p className="about-description">
                        Every feature in VitaeOne is designed with a clear
                        purpose: make resume creation fast, accessible, and
                        privacy-first while producing professional,
                        ATS-friendly resumes.
                    </p>

                    <p className="about-description">
                        Beyond VitaeOne, I'm constantly
                        exploring ideas that can make everyday software's more
                        useful for everyone.
                    </p>

                </div>

                {/* Right */}

                <div className="about-image reveal-right">

                    <Image
                        src="/images/vitaeOne_creator.png"
                        alt="Suraj Srinivas"
                        width={450}
                        height={550}
                        priority
                        className="about-photo float"
                    />

                    <a
                        href="https://www.linkedin.com/in/suraj-srinivas-a72204214/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button about-linkedin-button"
                    >
                        <ExternalLink size={18} />
                        Connect on LinkedIn
                    </a>

                </div>

            </div>
        </section>
    );
}