import { ResumeData } from "../../../types/resume";

interface HeaderProps {
    data: ResumeData;
}

export default function Header({
    data,
}: HeaderProps) {

    return (

        <header className="minimal-header">

            <div className="minimal-header__content">

                <h1 className="minimal-header__name">
                    {data.personal.fullName}
                </h1>

                <h2 className="minimal-header__title">
                    {data.personal.title}
                </h2>

                <div className="minimal-header__contact">

                    <span>{data.personal.phone}</span>

                    <span className="minimal-header__separator">|</span>

                    <span>{data.personal.email}</span>

                    <span className="minimal-header__separator">|</span>

                    <span>{data.personal.location}</span>

                </div>

            </div>

        </header>

    );
}