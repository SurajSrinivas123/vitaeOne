interface SummaryProps {
    summary: string;
}

export default function Summary({ summary }: SummaryProps) {
    return (
        <section className="resume-modern__section">
            <h2 className="resume-modern__heading">
                Summary
            </h2>

            <div className="resume-modern__summary-content">
                <p className="resume-modern__summary">
                    {summary}
                </p>
            </div>
        </section>
    );
}