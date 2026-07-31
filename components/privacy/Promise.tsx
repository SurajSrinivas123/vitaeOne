"use client";

import { HeartHandshake } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Promise() {
    return (
        <section className="privacy-promise">

            <div className="container">


                <Reveal>

                    <div className="promise-card">

                        <HeartHandshake size={54} />

                        <h2>Our Promise</h2>

                        <p>
                            VitaeOne was created with a simple belief:
                            building a professional resume shouldn't require
                            giving away your personal information.
                        </p>

                        <p>
                            We'll continue improving VitaeOne while keeping
                            privacy, simplicity, and accessibility at the
                            heart of every feature we build.
                        </p>

                    </div>
                </Reveal>

            </div>

        </section>
    );
}