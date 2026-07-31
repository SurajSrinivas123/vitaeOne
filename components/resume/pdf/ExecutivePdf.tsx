import { Document, Page, View } from "@react-pdf/renderer";

import { ResumeData } from "../types/resume";

import ExecutiveHeader from "./components/executive/ExecutiveHeader";
import ExecutiveSummary from "./components/executive/ExecutiveSummary";
import ExecutiveSectionHeading from "./components/executive/ExecutiveSectionHeading";
import ExecutiveExperienceItem from "./components/executive/ExecutiveExperienceItem";
import ExecutiveEducationItem from "./components/executive/ExecutiveEducationItem";
import ExecutiveSkillsBox from "./components/executive/ExecutiveSkillsBox";
import ExecutiveTrainingList from "./components/executive/ExecutiveTrainingList";
import ExecutiveLanguagesGrid from "./components/executive/ExecutiveLanguagesGrid";

import { executiveStyles as styles } from "./executiveStyles";

interface ExecutivePdfProps {
    data: ResumeData;
}

export default function ExecutivePdf({ data }: ExecutivePdfProps) {

    return (
        <Document>
            <Page size="A4" style={styles.page} wrap>

                {/* ---------------- Header ---------------- */}

                <ExecutiveHeader data={data} />

                {/* ---------------- Summary ---------------- */}

                {data.summary && (
                    <ExecutiveSummary summary={data.summary} />
                )}

                {/* ---------------- Experience ---------------- */}

                {data.experience.length > 0 && (
                    <View style={styles.section} wrap={false}>
                        <ExecutiveSectionHeading title="Experience" />

                        {data.experience.map((job) => (
                            <ExecutiveExperienceItem key={job.id} job={job} />
                        ))}
                    </View>
                )}

                {/* ---------------- Education ---------------- */}

                {data.education.length > 0 && (
                    <View style={styles.section} wrap={false}>
                        <ExecutiveSectionHeading title="Education" />

                        {data.education.map((education) => (
                            <ExecutiveEducationItem key={education.id} education={education} />
                        ))}
                    </View>
                )}

                {/* ---------------- Skills ---------------- */}

                {data.skills.length > 0 && (
                    <View style={styles.section} wrap={false}>
                        <ExecutiveSectionHeading title="Skills" />
                        <ExecutiveSkillsBox skills={data.skills} />
                    </View>
                )}

                {/* ---------------- Training ---------------- */}

                {data.training.length > 0 && (
                    <View style={styles.section} wrap={false}>
                        <ExecutiveSectionHeading title="Training / Courses" />
                        <ExecutiveTrainingList training={data.training} />
                    </View>
                )}

                {/* ---------------- Languages ---------------- */}

                {data.languages.length > 0 && (
                    <View style={styles.section} wrap={false}>
                        <ExecutiveSectionHeading title="Languages" />
                        <ExecutiveLanguagesGrid languages={data.languages} />
                    </View>
                )}

            </Page>
        </Document>
    );
}