"use client";

import { HeartHandshake } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ThankYou() {
    return (
        <section className="support-section">

            <div className="container">

                <Reveal>

                    <div className="support-thankyou">

                        <HeartHandshake size={48} />

                        <h2>Thank You ❤️</h2>

                        <p>
                            Whether you choose to contribute, share VitaeOne
                            with others, or simply use it to advance your
                            career, thank you for being part of the journey.
                        </p>

                        <p>
                            Your encouragement and support help keep this
                            project independent and focused on building a
                            better resume experience for everyone.
                        </p>

                    </div>

                </Reveal>

            </div>

        </section>
    );
}