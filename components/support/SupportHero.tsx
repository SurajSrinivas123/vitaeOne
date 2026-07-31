"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function SupportHero() {
    return (
        <section className="support">

            <div className="container support-container">

                <Reveal className="support-content">

                    <span className="section-badge">
                        Support VitaeOne
                    </span>

                    <h1 className="section-title">
                        Help Keep VitaeOne Free & Privacy-First
                    </h1>

                    <p className="support-description">
                        VitaeOne is built and maintained independently.
                        Your support helps cover development costs,
                        improve existing features, and keep the platform
                        accessible to everyone.
                    </p>

                    <p className="support-description">
                        Every contribution - big or small - helps me spend
                        more time building new templates, improving the
                        builder, and creating a better experience for
                        everyone.
                    </p>

                </Reveal>

                <Reveal
                    delay={200}
                    className="support-image"
                >

                    <div className="support-qr">
                        <Image
                            src="/images/qr.jpg"
                            alt="Support VitaeOne"
                            width={320}
                            height={320}
                            className="support-qr-image"
                        />

                        <p className="support-qr-name">
                            Banking Name: <strong>The Learning Zone</strong>
                        </p>


                    </div>

                </Reveal>

            </div>

        </section>
    );
}