import { View, Text } from "@react-pdf/renderer";
import { Language } from "../../../types/resume";
import { minimalStyles } from "../../minimalStyles";

interface Props { languages: Language[]; }

export default function MinimalLanguagesList({ languages }: Props) {
    return (
        <View style={minimalStyles.languagesList}>
            {languages.map((language) => (
                <View key={language.id} style={minimalStyles.languageItem} wrap={false}>
                    <Text style={minimalStyles.languageName}>{language.name}</Text>
                    <View style={minimalStyles.rating}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <View
                                key={index}
                                style={[minimalStyles.dot, index < language.rating ? minimalStyles.dotFilled : null]}
                            />
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
}