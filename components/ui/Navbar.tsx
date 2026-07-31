"use client";


import Link from "next/link";

import { APP } from "@/lib/constants";

import { usePathname } from "next/navigation";



export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="navbar">
            <div className="container navbar-container">

                {/* Logo */}

                <Link href="/" className="navbar-logo">
                    {APP.name}
                </Link>

                {/* Navigation */}

                <nav className="navbar-menu">

                    {/* <Link
                        href="/templates"
                        className={`navbar-link ${pathname === "/templates" ? "active" : ""}`}
                    >
                        Templates
                    </Link> */}

                    <Link
                        href="/about"
                        className={`navbar-link ${pathname === "/about" ? "active" : ""}`}
                    >
                        About
                    </Link>

                    <Link
                        href="/privacy"
                        className={`navbar-link ${pathname === "/privacy" ? "active" : ""}`}
                    >
                        Privacy
                    </Link>

                    <Link
                        href="/support"
                        className={`navbar-link ${pathname === "/support" ? "active" : ""}`}
                    >
                        Support
                    </Link>

                    <Link
                        href="/builder"
                        className="navbar-button"
                    >
                        Create Resume
                    </Link>

                </nav>

            </div>
        </header>
    );
}