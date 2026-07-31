"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PrivacyHero() {
    return (
        <section className="privacy-hero">

            <div className="container privacy-hero-container">

                <Reveal className="privacy-content">

                    <span className="section-badge">
                        Privacy First
                    </span>

                    <h1 className="section-title">
                        Your Resume. Your Data. Your Control.
                    </h1>

                    <p className="privacy-description">
                        A resume contains some of your most personal
                        professional information. VitaeOne is designed
                        so you can create professional resumes without
                        unnecessary sign-ups, excessive data collection,
                        or hidden surprises.
                    </p>

                    <div className="hero-actions">

                        <Link
                            href="/builder"
                            className="primary-button"
                        >
                            Create Resume
                        </Link>

                    </div>

                </Reveal>

                <Reveal delay={200}>
                    <div className="privacy-card">

                        <ShieldCheck size={90} />

                        <h3>Privacy by Design</h3>

                        <p>
                            Built with a privacy-first mindset from the
                            beginning.
                        </p>

                    </div>
                </Reveal>

            </div>

        </section>
    );
}