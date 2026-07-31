import {
    Document,
    Page,
    View,
} from "@react-pdf/renderer";

import { ResumeData } from "../types/resume";

import Header from "./components/Header";
import Summary from "./components/Summary";
import SectionHeading from "./components/SectionHeading";
import ExperienceItem from "./components/ExperienceItem";
import EducationItem from "./components/EducationItem";
import SkillsGrid from "./components/SkillsGrid";
import TrainingGrid from "./components/TrainingGrid";
import LanguagesGrid from "./components/LanguagesGrid";

import { styles } from "./styles";

interface ModernPdfProps {
    data: ResumeData;
}

export default function ModernPdf({
    data,
}: ModernPdfProps) {

    return (

        <Document>

            <Page
                size="A4"
                style={styles.page}
                wrap
            >

                {/* ---------------- Header ---------------- */}

                <Header data={data} />

                {/* ---------------- Summary ---------------- */}

                {data.summary && (

                    <Summary
                        summary={data.summary}
                    />

                )}

                {/* ---------------- Experience ---------------- */}

                {data.experience.length > 0 && (

                    <View style={styles.section} wrap={false}>

                        <SectionHeading
                            title="Experience"
                        />

                        {data.experience.map((job) => (

                            <ExperienceItem
                                key={job.id}
                                job={job}
                            />

                        ))}

                    </View>

                )}

                {/* ---------------- Education ---------------- */}

                {data.education.length > 0 && (

                    <View style={styles.section} wrap={false}>

                        <SectionHeading
                            title="Education"
                        />

                        {data.education.map((education) => (

                            <EducationItem
                                key={education.id}
                                education={education}
                            />

                        ))}

                    </View>

                )}

                {/* ---------------- Skills ---------------- */}

                {data.skills.length > 0 && (

                    <View style={styles.section} wrap={false}>

                        <SectionHeading
                            title="Skills"
                        />

                        <SkillsGrid
                            skills={data.skills}
                        />

                    </View>

                )}

                {/* ---------------- Training ---------------- */}

                {data.training.length > 0 && (

                    <View style={styles.section} wrap={false}>

                        <SectionHeading
                            title="Training"
                        />

                        <TrainingGrid
                            training={data.training}
                        />

                    </View>

                )}

                {/* ---------------- Languages ---------------- */}

                {data.languages.length > 0 && (

                    <View style={styles.section} wrap={false}>

                        <SectionHeading
                            title="Languages"
                        />

                        <LanguagesGrid
                            languages={data.languages}
                        />

                    </View>

                )}

            </Page>

        </Document>

    );

}