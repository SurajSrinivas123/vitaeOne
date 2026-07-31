import { Text } from "@react-pdf/renderer";
import { executiveStyles as styles } from "../../executiveStyles";

interface Props {
    title: string;
}

export default function ExecutiveSectionHeading({ title }: Props) {
    return (
        <Text style={styles.sectionHeading}>
            {title.toUpperCase()}
        </Text>
    );
}