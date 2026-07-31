import { StyleSheet } from "@react-pdf/renderer";

const PX_TO_PT = 0.75;
const px = (value: number) => Math.round(value * PX_TO_PT * 100) / 100;

export const Colors = {
    text: "#1a1a1a",
    muted: "#6b7280",
    mutedLight: "#9ca3af",
    border: "#1a1a1a",
    boxBorder: "#d1d5db",
    dotEmpty: "#d1d5db",
    trainingTitle: "#1a1a1a",
    avatarBg: "#e5e7eb",
    avatarIcon: "#9ca3af",
    white: "#FFFFFF",
};

export const Typography = {
    name: px(20),
    designation: px(13),
    heading: px(13),
    role: px(13.5),
    body: px(12.5),
    company: px(12.5),
    caption: px(12),
    small: px(11.5),
};

export const Spacing = {
    xs: px(2),
    sm: px(6),
    md: px(12),
    lg: px(16),
    xl: px(18),
};

export const Layout = {
    pagePaddingTop: px(40),
    pagePaddingBottom: px(40),
    pagePaddingHorizontal: px(48),
};

export const executiveStyles = StyleSheet.create({

    page: {
        backgroundColor: Colors.white,
        color: Colors.text,
        fontFamily: "Times-Roman",
        fontSize: Typography.body,
        paddingTop: Layout.pagePaddingTop,
        paddingBottom: Layout.pagePaddingBottom,
        paddingLeft: Layout.pagePaddingHorizontal,
        paddingRight: Layout.pagePaddingHorizontal,
    },

    /* Header */
    header: {
        alignItems: "center",
        // borderBottomWidth: px(2),
        borderBottomColor: Colors.border,
        paddingBottom: Spacing.lg,
        marginBottom: Spacing.lg,
    },

    // avatar: {
    //     width: px(54),
    //     height: px(54),
    //     borderRadius: px(27),
    //     backgroundColor: Colors.avatarBg,
    //     marginBottom: Spacing.sm,
    //     alignItems: "center",
    //     justifyContent: "center",
    // },

    name: {
        fontSize: Typography.name,
        fontWeight: "bold",
        letterSpacing: px(1),
        textAlign: "center",
    },

    designation: {
        marginTop: px(3),
        fontSize: Typography.designation,
        color: Colors.muted,
        textAlign: "center",
    },

    contactRow: {
        marginTop: Spacing.sm,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },

    contact: {
        fontSize: Typography.caption,
        color: "#374151",
    },

    separator: {
        marginHorizontal: px(6),
        color: Colors.mutedLight,
    },

    /* Section */
    section: {
        borderTopWidth: px(1),
        borderTopColor: Colors.border,
        marginTop: Spacing.lg,
        paddingTop: Spacing.md,
    },

    sectionHeading: {
        fontSize: Typography.heading,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: px(1.5),
        textAlign: "center",
        marginBottom: Spacing.md,
    },

    /* Summary */
    summaryBox: {
        // borderWidth: px(1),
        // borderColor: Colors.boxBorder,
        // borderRadius: px(4),
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
    },

    summary: {
        fontSize: Typography.body,
        lineHeight: 1.6,
        color: "#374151",
        textAlign: "justify",
    },

    /* Shared row */
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: px(6),
    },

    /* Experience / Education */
    itemBlock: {
        marginBottom: Spacing.md,
    },

    company: {
        fontSize: Typography.company,
        fontWeight: "bold",
        color: Colors.muted,
        marginBottom: px(6),
    },

    role: {
        fontSize: Typography.role,
        fontWeight: "bold",
    },

    date: {
        fontSize: Typography.caption,
        color: Colors.muted,
    },

    bulletList: {
        marginTop: Spacing.xs + px(4),
    },

    bulletRow: {
        flexDirection: "row",
        marginBottom: px(2),
    },

    bullet: {
        width: px(12),
        fontSize: Typography.body,
        color: "#374151",
    },

    bulletText: {
        flex: 1,
        fontSize: Typography.body,
        lineHeight: 1.55,
        color: "#374151",
    },

    /* Skills */
    skillsBox: {
        // borderWidth: px(1),
        // borderColor: Colors.boxBorder,
        borderRadius: px(4),
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
    },

    skillsText: {
        fontSize: Typography.body,
        lineHeight: 1.6,
        color: "#374151",
        textAlign: "center",
    },

    /* Training */
    trainingItem: {
        flexDirection: "row",
        marginBottom: px(6),
    },

    trainingTitle: {
        fontSize: Typography.body,
        fontWeight: "bold",
        color: Colors.trainingTitle,
    },

    trainingSeparator: {
        fontSize: Typography.body,
        color: Colors.mutedLight,
        marginHorizontal: px(6),
    },

    trainingInstitution: {
        fontSize: Typography.body,
        color: Colors.muted,
    },

    /* Languages */
    languageRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: px(10),
    },

    languageItem: {
        width: "33.33%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: Spacing.sm,
    },

    languageName: {
        fontSize: Typography.body,
        fontWeight: "bold",
        marginRight: px(8),
    },

    languageLevel: {
        fontSize: Typography.small,
        color: Colors.muted,
        marginRight: px(8),
    },

    rating: {
        flexDirection: "row",
    },

    dot: {
        width: px(6),
        height: px(6),
        borderRadius: px(3),
        marginLeft: px(3),
        backgroundColor: Colors.dotEmpty,
    },

    dotFilled: {
        backgroundColor: Colors.text,
    },

});