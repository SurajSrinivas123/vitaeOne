"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, CircleCheck } from "lucide-react";

interface FieldSelectProps {
    options: readonly string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    searchable?: boolean;
}

export default function FieldSelect({
    options,
    value,
    onChange,
    placeholder = "Select",
    searchable = false,
}: FieldSelectProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredOptions = searchable
        ? options.filter((option) =>
            option.toLowerCase().includes(search.trim().toLowerCase())
        )
        : options;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
                setSearch("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="field-select" ref={dropdownRef}>
            <button
                type="button"
                className={`field-select__trigger ${open ? "open" : ""}`}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className={value ? "" : "field-select__placeholder"}>
                    {value || placeholder}
                </span>

                <ChevronDown
                    size={16}
                    className={`field-select__icon ${open ? "field-select__icon--open" : ""}`}
                />
            </button>

            {open && (
                <div className="field-select__menu">
                    {searchable && (
                        <input
                            type="text"
                            className="field-select__search"
                            placeholder="Type to search..."
                            value={search}
                            autoFocus
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    )}

                    {filteredOptions.length === 0 && (
                        <div className="field-select__empty">No matches found</div>
                    )}

                    {filteredOptions.map((option) => (
                        <button
                            key={option}
                            type="button"
                            className={`field-select__item ${value === option ? "active" : ""}`}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                                setSearch("");
                            }}
                        >
                            <span>{option}</span>

                            {value === option && (
                                <CircleCheck size={16} className="template-item__check" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}