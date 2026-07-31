import { PersonalInfo } from "../../../types/resume";

interface HeaderProps {
    personal: PersonalInfo;
}

export default function Header({ personal }: HeaderProps) {
    return (
        <header className="resume-modern__header">

            <h1 className="resume-modern__name">
                {personal.fullName}
            </h1>

            <p className="resume-modern__designation">
                {personal.title}
            </p>

            <div className="resume-modern__contact">

                <span>{personal.phone}</span>

                <span className="resume-modern__separator">|</span>

                <span>{personal.email}</span>

                {personal.location && (
                    <>
                        <span className="resume-modern__separator">|</span>
                        <span>{personal.location}</span>
                    </>
                )}

            </div>

        </header>
    );
}