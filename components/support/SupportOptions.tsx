"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

export default function SupportOptions() {

    const [copied, setCopied] = useState(false);

    const upi = "developersuraj@ybl";

    async function copyUPI() {
        await navigator.clipboard.writeText(upi);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <section className="support-section">
            <div className="container">

                <Reveal>

                    <div className="support-upi">

                        <h2>Support via UPI</h2>

                        <p>
                            If you'd like to support VitaeOne, you can use the
                            UPI ID below or scan the QR code above.
                        </p>

                        <h3>{upi}</h3>

                        <button
                            className="primary-button"
                            onClick={copyUPI}
                        >
                            {copied ? (
                                <>
                                    <Check size={18} />
                                    Copied
                                </>
                            ) : (
                                <>
                                    <Copy size={18} />
                                    Copy UPI ID
                                </>
                            )}
                        </button>

                    </div>

                </Reveal>

            </div>
        </section>
    );
}