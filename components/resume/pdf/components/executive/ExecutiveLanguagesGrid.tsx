import { View, Text } from "@react-pdf/renderer";
import { Language } from "../../../types/resume";
import { executiveStyles as styles } from "../../executiveStyles";

interface Props {
    languages: Language[];
}

export default function ExecutiveLanguagesGrid({ languages }: Props) {

    const rows = [];
    for (let i = 0; i < languages.length; i += 3) {
        rows.push(languages.slice(i, i + 3));
    }

    return (
        <View>
            {rows.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.languageRow}>
                    {row.map((language) => (
                        <View key={language.id} style={styles.languageItem}>

                            <Text style={styles.languageName}>
                                {language.name}
                            </Text>

                            {/* <Text style={styles.languageLevel}>
                                {language.level}
                            </Text> */}

                            <View style={styles.rating}>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <View
                                        key={index}
                                        style={
                                            index < language.rating
                                                ? [styles.dot, styles.dotFilled]
                                                : [styles.dot]
                                        }
                                    />
                                ))}
                            </View>

                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}
