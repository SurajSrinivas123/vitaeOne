import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">

                {/* Left Side */}

                <div className="hero-content reveal-left">

                    {/* <span className="hero-badge fade-up">
                        Privacy First • ATS Friendly
                    </span> */}

                    <h1 className="hero-title">
                        Build Professional Resumes
                        <br />
                        Without Giving Away Your Data.
                    </h1>

                    <p className="hero-description">
                        VitaeOne creates modern ATS-friendly resumes directly in
                        your browser. No accounts. No tracking. No cloud storage.
                    </p>

                    <div className="hero-actions">

                        <Link
                            href="/builder"
                            className="primary-button"
                        >
                            Create Resume
                        </Link>

                        <Link
                            href="/support"
                            className="secondary-button"
                        >
                            ❤️ Support
                        </Link>

                    </div>

                    <p className="hero-note">
                        No Signup • 100% Free • Local Storage Only
                    </p>

                </div>

                {/* Right Side */}

                <div className="hero-preview reveal-right">

                    <div className="preview-wrapper">

                        <div className="preview-card">

                            <div className="resume-preview">

                                <div className="resume-header">

                                    <div className="resume-avatar"></div>

                                    <div className="resume-info">

                                        <div className="resume-name"></div>

                                        <div className="resume-role"></div>

                                    </div>

                                </div>

                                <div className="resume-section">

                                    <div className="resume-title"></div>

                                    <div className="resume-line full"></div>

                                    <div className="resume-line"></div>

                                    <div className="resume-line short"></div>

                                </div>

                                <div className="resume-section">

                                    <div className="resume-title"></div>

                                    <div className="skill-list">

                                        <span></span>

                                        <span></span>

                                        <span></span>

                                        <span></span>

                                    </div>

                                </div>

                                <div className="resume-section">

                                    <div className="resume-title"></div>

                                    <div className="resume-line full"></div>

                                    <div className="resume-line full"></div>

                                    <div className="resume-line"></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}