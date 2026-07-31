import { StyleSheet } from "@react-pdf/renderer";

const PX_TO_PT = 0.75;
const px = (value: number) => Math.round(value * PX_TO_PT * 100) / 100;

export const MinimalColors = {
    text: "#333333",
    muted: "#666666",
    light: "#D7DDE6",
    blue: "#1976D2",
    navy: "#173B63",
    navyAccent: "#2F65B8",
    divider: "#D8D8D8",
    white: "#FFFFFF",
};

export const minimalStyles = StyleSheet.create({

    page: {
        backgroundColor: MinimalColors.white,
        color: MinimalColors.text,
        fontFamily: "Helvetica",
        fontSize: px(13),
        paddingTop: px(40),
        paddingBottom: px(40),
        paddingLeft: px(40),
        paddingRight: px(40),
    },

    /* HEADER */
    header: { marginBottom: px(0) },

    name: {
        fontSize: px(34),
        fontWeight: "bold",
        color: MinimalColors.text,
        textTransform: "uppercase",
        lineHeight: 1.15,
        marginBottom: px(6),
    },

    title: {
        fontSize: px(16),
        fontWeight: "bold",
        color: MinimalColors.blue,
        marginBottom: px(6),
    },

    contactRow: { flexDirection: "row", flexWrap: "wrap" },
    contact: { fontSize: px(12), color: "#555555" },

    headerDivider: {
        marginTop: px(10),
        borderBottomWidth: px(1),
        borderBottomColor: MinimalColors.divider,
    },

    /* TWO COLUMN LAYOUT */



    content: {
        flexDirection: "row",
        alignItems: "flex-start",
    },

    left: {
        width: "65%",
        paddingRight: px(18),
    },

    right: {
        width: "35%",
        paddingLeft: px(18),
    },




    /* SECTION */
    section: { marginBottom: px(0) },

    sectionTitle: {
        fontSize: px(14),
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: px(1),
        color: MinimalColors.text,
        marginBottom: px(8),
    },

    sectionDivider: {
        height: px(1),
        backgroundColor: MinimalColors.divider,
        marginBottom: px(8),
    },

    /* SUMMARY */
    summary: {
        fontSize: px(13),
        lineHeight: 1.45,
        textAlign: "justify",
        color: MinimalColors.text,
        marginTop: px(2),
    },

    /* EXPERIENCE */
    experienceItem: { marginBottom: px(12) },

    role: {
        fontSize: px(15),
        fontWeight: "bold",
        color: MinimalColors.text,
        lineHeight: 1.25,
        marginBottom: px(8),
    },

    meta: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "baseline",
        marginBottom: px(10),
    },

    company: { fontSize: px(13), fontWeight: "bold", color: MinimalColors.blue },
    metaSeparator: { fontSize: px(12), color: MinimalColors.muted, marginHorizontal: px(4) },
    date: { fontSize: px(12), color: MinimalColors.muted },

    bulletList: { marginTop: px(0) },
    bulletRow: { flexDirection: "row", marginBottom: px(2) },
    bullet: { width: px(12), fontSize: px(13) },
    bulletText: { flex: 1, fontSize: px(13), lineHeight: 1.6, color: MinimalColors.text, },

    /* EDUCATION */
    educationItem: { marginBottom: px(10) },
    field: { fontSize: px(13), fontWeight: "bold", color: MinimalColors.text, marginBottom: px(6) },
    institution: { fontSize: px(13), color: MinimalColors.blue, marginBottom: px(6) },
    educationDate: { fontSize: px(12), color: MinimalColors.muted },

    /* SKILLS */
    skillsGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: px(4), },
    skill: { width: "50%", fontSize: px(13), color: MinimalColors.text, marginBottom: px(8) },

    /* TRAINING */
    trainingItem: { marginBottom: px(10) },
    trainingTitle: { fontSize: px(13), fontWeight: "bold", color: MinimalColors.navy },
    trainingInstitution: { marginTop: px(8), fontSize: px(12), color: MinimalColors.navyAccent },

    /* LANGUAGES */
    languageItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: px(10),
    },
    languageName: { fontSize: px(13), fontWeight: "bold", color: MinimalColors.navy },
    rating: { flexDirection: "row" },
    dot: {
        width: px(8), height: px(8), borderRadius: px(4),
        marginLeft: px(4), backgroundColor: MinimalColors.light,
    },
    dotFilled: { backgroundColor: MinimalColors.navyAccent },


    // New Styles from chatgpt

    sectionHeading: {
        marginTop: px(16),
    },

});