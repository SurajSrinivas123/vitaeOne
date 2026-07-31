"use client";

import { toast } from "sonner";
import { useResume } from "@/src/context/ResumeContext";
import FieldSelect from "@/components/ui/FieldSelect";
import {
    ResumeData,
    ExperienceItem,
    EducationItem,
    SkillItem,
    TrainingItem,
    LanguageItem,
} from "@/components/resume/types/resume";

const MAX_EXPERIENCE = 3;
const MAX_EDUCATION = 3;
const MAX_SKILLS = 10;
const MAX_TRAINING = 6;
const MAX_LANGUAGES = 6;
const MAX_SUMMARY = 500;
const MAX_HIGHLIGHT_LENGTH = 60;

const LANGUAGES = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Gujarati",
    "Punjabi",
    "Bengali",
    "Urdu",
    "Odia",
    "Assamese",
    "French",
    "German",
    "Spanish",
    "Italian",
    "Portuguese",
    "Russian",
    "Japanese",
    "Chinese",
    "Korean",
    "Arabic"
] as const;

const LANGUAGE_LEVELS = ["Native", "Intermediate", "Basic"] as const;

function levelToRating(level: string): number {
    switch (level) {
        case "Native":
            return 5;
        case "Basic":
            return 1;
        case "Intermediate":
            return 3;
        default:
            return 0;
    }
}

function newId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function ResumeForm() {
    const { resume, setResume } = useResume();

    const update = (patch: Partial<ResumeData>) => {
        setResume((prev) => ({ ...prev, ...patch }));
    };

    /* ===================== PERSONAL ===================== */

    const updatePersonal = (field: keyof ResumeData["personal"], value: string) => {
        update({ personal: { ...resume.personal, [field]: value } });
    };

    /* ===================== SUMMARY ===================== */

    const summaryLength = resume.summary.length;

    /* ===================== EXPERIENCE ===================== */

    const addExperience = () => {
        if (resume.experience.length >= MAX_EXPERIENCE) return;
        const item: ExperienceItem = {
            id: newId(),
            company: "",
            role: "",
            location: "",
            startDate: "",
            endDate: "",
            current: false,
            highlights: ["", "", ""],
        };
        update({ experience: [...resume.experience, item] });
    };

    const removeExperience = (id: string) => {
        update({ experience: resume.experience.filter((e) => e.id !== id) });
    };

    const updateExperience = (
        id: string,
        field: keyof ExperienceItem,
        value: string | boolean
    ) => {
        update({
            experience: resume.experience.map((e) =>
                e.id === id ? { ...e, [field]: value } : e
            ),
        });
    };

    const updateHighlight = (id: string, index: number, value: string) => {
        update({
            experience: resume.experience.map((e) => {
                if (e.id !== id) return e;
                const highlights = [...e.highlights];
                highlights[index] = value;
                return { ...e, highlights };
            }),
        });
    };

    /* ===================== EDUCATION ===================== */

    const addEducation = () => {
        if (resume.education.length >= MAX_EDUCATION) return;
        const item: EducationItem = {
            id: newId(),
            institution: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
            cgpa: "",
        };
        update({ education: [...resume.education, item] });
    };

    const removeEducation = (id: string) => {
        update({ education: resume.education.filter((e) => e.id !== id) });
    };

    const updateEducation = (id: string, field: keyof EducationItem, value: string) => {
        update({
            education: resume.education.map((e) =>
                e.id === id ? { ...e, [field]: value } : e
            ),
        });
    };

    /* ===================== SKILLS ===================== */

    const addSkill = () => {
        if (resume.skills.length >= MAX_SKILLS) return;
        const item: SkillItem = { id: newId(), name: "" };
        update({ skills: [...resume.skills, item] });
    };

    const removeSkill = (id: string) => {
        update({ skills: resume.skills.filter((s) => s.id !== id) });
    };

    const updateSkill = (id: string, value: string) => {
        update({
            skills: resume.skills.map((s) => (s.id === id ? { ...s, name: value } : s)),
        });
    };

    /* ===================== TRAINING / CERTIFICATIONS ===================== */

    const addTraining = () => {
        if (resume.training.length >= MAX_TRAINING) return;
        const item: TrainingItem = { id: newId(), title: "", institution: "" };
        update({ training: [...resume.training, item] });
    };

    const removeTraining = (id: string) => {
        update({ training: resume.training.filter((t) => t.id !== id) });
    };

    const updateTraining = (id: string, field: keyof TrainingItem, value: string) => {
        update({
            training: resume.training.map((t) =>
                t.id === id ? { ...t, [field]: value } : t
            ),
        });
    };

    /* ===================== LANGUAGES ===================== */

    const addLanguage = () => {
        if (resume.languages.length >= MAX_LANGUAGES) return;
        const item: LanguageItem = { id: newId(), name: "", level: "", rating: 0 };
        update({ languages: [...resume.languages, item] });
    };

    const removeLanguage = (id: string) => {
        update({ languages: resume.languages.filter((l) => l.id !== id) });
    };

    const updateLanguageName = (id: string, value: string) => {
        update({
            languages: resume.languages.map((l) =>
                l.id === id ? { ...l, name: value } : l
            ),
        });
    };

    const updateLanguageLevel = (id: string, value: string) => {
        update({
            languages: resume.languages.map((l) =>
                l.id === id ? { ...l, level: value, rating: levelToRating(value) } : l
            ),
        });
    };

    /* ===================== CLEAR ALL ===================== */



    const clearAll = () => {
        setResume((prev) => ({
            ...prev,
            personal: {
                fullName: "",
                title: "",
                email: "",
                phone: "",
                location: "",
                linkedIn: "",
                github: "",
                portfolio: "",
            },
            summary: "",
            experience: [],
            education: [],
            skills: [],
            training: [],
            languages: [],
        }));

        toast.success("Form Cleared Successfully.");
    };






    /* ===================== RENDER ===================== */

    return (
        <div className="editor-panel">
            {/* PERSONAL DETAILS */}
            <section className="editor-card">
                <div className="card-title-row">
                    <h2>Personal Details</h2>

                    <button type="button" className="clear-all-button" onClick={clearAll}>
                        Clear All
                    </button>
                </div>

                <div className="input-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Suraj Srinivas"
                        value={resume.personal.fullName}
                        onChange={(e) => updatePersonal("fullName", e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Role</label>
                    <input
                        type="text"
                        placeholder="Software Developer"
                        value={resume.personal.title}
                        onChange={(e) => updatePersonal("title", e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        placeholder="9876543210"
                        value={resume.personal.phone}
                        onChange={(e) => updatePersonal("phone", e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="bssuraj2@gmail.com"
                        value={resume.personal.email}
                        onChange={(e) => updatePersonal("email", e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Location</label>
                    <input
                        type="text"
                        placeholder="Location"
                        value={resume.personal.location}
                        onChange={(e) => updatePersonal("location", e.target.value)}
                    />
                </div>
            </section>

            {/* SUMMARY */}
            <section className="editor-card">
                <h2>Professional Summary</h2>

                <div className="textarea-wrapper">
                    <textarea
                        rows={6}
                        maxLength={MAX_SUMMARY}
                        placeholder="Write a short professional summary..."
                        value={resume.summary}
                        onChange={(e) => update({ summary: e.target.value })}
                    />

                    <div
                        className={
                            summaryLength >= MAX_SUMMARY
                                ? "character-count limit"
                                : "character-count"
                        }
                    >
                        <span>{summaryLength}</span>/{MAX_SUMMARY}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className="editor-card">
                <h2>
                    Experience <span className="section-limit">(Maximum {MAX_EXPERIENCE})</span>
                </h2>

                <div className="experience-list">
                    {resume.experience.map((exp, index) => (
                        <div className="experience-item" key={exp.id}>
                            <div className="experience-header">
                                <h3 className="experience-title">Experience {index + 1}</h3>
                                <button
                                    type="button"
                                    className="delete-experience"
                                    onClick={() => removeExperience(exp.id)}
                                >
                                    Delete
                                </button>
                            </div>

                            <div className="input-group">
                                <label>Designation</label>
                                <input
                                    type="text"
                                    placeholder="Software Engineer"
                                    value={exp.role}
                                    onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    value={exp.company}
                                    onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                                />
                            </div>

                            <div className="date-row">
                                <div className="input-group">
                                    <label>From</label>
                                    <input
                                        type="month"
                                        value={exp.startDate}
                                        onChange={(e) =>
                                            updateExperience(exp.id, "startDate", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <label>To</label>
                                    <input
                                        type="month"
                                        value={exp.current ? "" : exp.endDate}
                                        disabled={exp.current}
                                        onChange={(e) =>
                                            updateExperience(exp.id, "endDate", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="input-group checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={exp.current}
                                        onChange={(e) =>
                                            updateExperience(exp.id, "current", e.target.checked)
                                        }
                                    />{" "}
                                    I currently work here
                                </label>
                            </div>

                            <div className="description-group">
                                <label className="description-label">Job Description</label>

                                {exp.highlights.map((point, i) => (
                                    <div className="input-group" key={i}>
                                        <input
                                            type="text"
                                            placeholder={`Point ${i + 1}`}
                                            maxLength={MAX_HIGHLIGHT_LENGTH}
                                            value={point}
                                            onChange={(e) => updateHighlight(exp.id, i, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="outline-button"
                    onClick={addExperience}
                    disabled={resume.experience.length >= MAX_EXPERIENCE}
                >
                    {resume.experience.length >= MAX_EXPERIENCE
                        ? "Maximum Experience Added"
                        : "Add Experience"}
                </button>
            </section>

            {/* EDUCATION */}
            <section className="editor-card">
                <h2>
                    Education <span className="section-limit">(Maximum {MAX_EDUCATION})</span>
                </h2>

                <div className="education-list">
                    {resume.education.map((edu, index) => (
                        <div className="education-item" key={edu.id}>
                            <div className="education-header">
                                <h3 className="education-title">Education {index + 1}</h3>
                                <button
                                    type="button"
                                    className="delete-education"
                                    onClick={() => removeEducation(edu.id)}
                                >
                                    Delete
                                </button>
                            </div>

                            <div className="input-group">
                                <label>Course</label>
                                <input
                                    type="text"
                                    placeholder="Bachelor of Technology"
                                    value={edu.field}
                                    onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label>Institute</label>
                                <input
                                    type="text"
                                    placeholder="XYZ University"
                                    value={edu.institution}
                                    onChange={(e) =>
                                        updateEducation(edu.id, "institution", e.target.value)
                                    }
                                />
                            </div>

                            <div className="date-row">
                                <div className="input-group">
                                    <label>From</label>
                                    <input
                                        type="month"
                                        value={edu.startDate}
                                        onChange={(e) =>
                                            updateEducation(edu.id, "startDate", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <label>To</label>
                                    <input
                                        type="month"
                                        value={edu.endDate}
                                        onChange={(e) =>
                                            updateEducation(edu.id, "endDate", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="outline-button"
                    onClick={addEducation}
                    disabled={resume.education.length >= MAX_EDUCATION}
                >
                    {resume.education.length >= MAX_EDUCATION
                        ? "Maximum Education Added"
                        : "Add Education"}
                </button>
            </section>

            {/* SKILLS */}
            <section className="editor-card">
                <h2>
                    Skills <span className="section-limit">(Maximum {MAX_SKILLS})</span>
                </h2>

                <div className="skills-list">
                    {resume.skills.map((skill) => (
                        <div className="skill-item" key={skill.id}>
                            <input
                                type="text"
                                className="skill-name"
                                placeholder="e.g. React.js"
                                value={skill.name}
                                onChange={(e) => updateSkill(skill.id, e.target.value)}
                            />
                            <button
                                type="button"
                                className="delete-skill"
                                onClick={() => removeSkill(skill.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="outline-button"
                    onClick={addSkill}
                    disabled={resume.skills.length >= MAX_SKILLS}
                >
                    {resume.skills.length >= MAX_SKILLS ? "Maximum Skills Added" : "Add Skill"}
                </button>
            </section>

            {/* TRAINING / CERTIFICATIONS */}
            <section className="editor-card">
                <h2>
                    Certifications <span className="section-limit">(Maximum {MAX_TRAINING})</span>
                </h2>

                <div className="certification-list">
                    {resume.training.map((item, index) => (
                        <div className="certification-item" key={item.id}>
                            <div className="education-header">
                                <h3 className="education-title">Certification {index + 1}</h3>
                                <button
                                    type="button"
                                    className="delete-education"
                                    onClick={() => removeTraining(item.id)}
                                >
                                    Delete
                                </button>
                            </div>

                            <div className="input-group">
                                <label>Course</label>
                                <input
                                    type="text"
                                    className="certification-course"
                                    placeholder="Advanced React"
                                    value={item.title}
                                    onChange={(e) => updateTraining(item.id, "title", e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label>Institute</label>
                                <input
                                    type="text"
                                    className="certification-institute"
                                    placeholder="Udemy"
                                    value={item.institution}
                                    onChange={(e) =>
                                        updateTraining(item.id, "institution", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="outline-button"
                    onClick={addTraining}
                    disabled={resume.training.length >= MAX_TRAINING}
                >
                    {resume.training.length >= MAX_TRAINING
                        ? "Maximum Certifications Added"
                        : "Add Certification"}
                </button>
            </section>

            {/* LANGUAGES */}
            <section className="editor-card">


                {/* LANGUAGES */}
                <section className="editor-card">
                    <h2>
                        Languages <span className="section-limit">(Maximum {MAX_LANGUAGES})</span>
                    </h2>

                    <div className="language-list">
                        {resume.languages.map((lang, index) => (
                            <div className="language-card" key={lang.id}>
                                <div className="education-header">
                                    <h3 className="education-title">
                                        Language {index + 1}
                                    </h3>

                                    <button
                                        type="button"
                                        className="delete-education"
                                        onClick={() => removeLanguage(lang.id)}
                                    >
                                        Delete
                                    </button>
                                </div>

                                <div className="input-group">
                                    <label>Language</label>

                                    <FieldSelect
                                        options={LANGUAGES}
                                        value={lang.name}
                                        onChange={(value) => updateLanguageName(lang.id, value)}
                                        placeholder="Select Language"
                                        searchable
                                    />
                                </div>

                                <div className="input-group">
                                    <label>Proficiency</label>

                                    <FieldSelect
                                        options={LANGUAGE_LEVELS}
                                        value={lang.level}
                                        onChange={(value) => updateLanguageLevel(lang.id, value)}
                                        placeholder="Select Proficiency"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="outline-button"
                        onClick={addLanguage}
                        disabled={resume.languages.length >= MAX_LANGUAGES}
                    >
                        {resume.languages.length >= MAX_LANGUAGES
                            ? "Maximum Languages Added"
                            : "Add Language"}
                    </button>
                </section>


            </section>
        </div>
    );
}