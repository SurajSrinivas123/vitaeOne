"use client";

import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PdfRenderer from "../resume/pdf/PdfRenderer";

import Link from "next/link";
import { APP } from "@/lib/constants";
import { useResume } from "@/src/context/ResumeContext";
import { RESUME_TEMPLATES } from "@/src/lib/templates";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, CircleCheck } from "lucide-react";

export default function Toolbar() {

    const {
        resume,
        template,
        setTemplate,
    } = useResume();

    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);



    const downloadResume = async () => {

        const blob = await pdf(
            <PdfRenderer
                data={resume}
                template={template}
            />
        ).toBlob();

        const fileName =
            (resume.personal.fullName.trim() || "Resume")
                .replace(/[<>:"/\\|?*]/g, "");

        saveAs(blob, `${fileName}.pdf`);
    };



    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    return (
        <header className="builder-toolbar">

            <div className="container builder-toolbar-container">

                <Link
                    href="/"
                    className="navbar-logo"
                >
                    {APP.name}
                </Link>

                <div className="builder-toolbar__actions">

                    <div
                        className="template-dropdown"
                        ref={dropdownRef}
                    >

                        <button
                            type="button"
                            className="builder-btn builder-btn--secondary"
                            onClick={() => setOpen(!open)}
                        >
                            <span>Templates</span>

                            <ChevronDown
                                size={16}
                                className={`builder-btn__icon ${open ? "builder-btn__icon--open" : ""}`}
                            />
                        </button>

                        {open && (

                            <div className="template-menu">

                                {RESUME_TEMPLATES.map((item) => (

                                    <button
                                        key={item.id}
                                        type="button"
                                        className={`template-item ${template === item.id
                                            ? "active"
                                            : ""
                                            }`}
                                        onClick={() => {
                                            setTemplate(item.id);
                                            setOpen(false);
                                        }}
                                    >
                                        <>
                                            <span>{item.name}</span>

                                            {template === item.id && (
                                                <CircleCheck
                                                    size={16}
                                                    className="template-item__check"
                                                />
                                            )}
                                        </>

                                    </button>

                                ))}

                            </div>

                        )}

                    </div>

                    <button
                        type="button"
                        className="builder-btn builder-btn--primary"
                        onClick={downloadResume}
                    >
                        <Download size={16} />
                        <span>Download PDF</span>
                    </button>

                </div>

            </div>

        </header>
    );
}   