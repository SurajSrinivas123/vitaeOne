"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Creator() {
    return (
        <section className="creator">
            <div className="container creator-container">

                {/* Left Side */}



                <Reveal>


                    <div className="creator-content reveal-left">

                        <span className="section-badge">
                            Meet the Creator
                        </span>

                        <h2 className="section-title">
                            Built by an Independent Developer
                        </h2>

                        <p className="creator-description">
                            Hi, I'm <strong>Suraj Srinivas</strong>.
                        </p>

                        <p className="creator-description">
                            I created VitaeOne because I wanted a resume builder
                            that respected user privacy while helping people create
                            beautiful, ATS-friendly resumes. No accounts. No
                            tracking. No unnecessary data collection.
                        </p>


                        <p className="creator-description">
                            If VitaeOne helps you in your career journey, consider
                            supporting its development. Every contribution helps me
                            improve the project and keep it free for everyone.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/suraj-srinivas-a72204214/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-button creator-linkedin-button"
                        >
                            <ExternalLink size={18} />
                            Connect on LinkedIn
                        </a>

                    </div>


                </Reveal>



                {/* Right Side */}


                <Reveal delay={150}>

                    <div className="creator-image reveal-right">

                        <Image
                            src="/images/vitaeOne_creator.png"
                            alt="Suraj Srinivas"
                            width={450}
                            height={550}
                            priority
                            className="creator-photo float"
                        />

                        <a
                            href="/support"
                            className="primary-button creator-support-button"
                        >
                            ❤️ Support VitaeOne
                        </a>

                    </div>

                </Reveal>

            </div>
        </section>
    );
}