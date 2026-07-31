import { StyleSheet } from "@react-pdf/renderer";

/* ==========================================================
   UNIT CONVERSION

   @react-pdf/renderer treats every unitless number as POINTS,
   not pixels. All the design values below are expressed in the
   same px numbers used in the web preview — `px()` converts them
   to pt consistently, in one place, so nothing silently drifts
   between components. (1px = 0.75pt at 96dpi)
========================================================== */

const PX_TO_PT = 0.75;
const px = (value: number) => Math.round(value * PX_TO_PT * 100) / 100;

/* ==========================================================
   DESIGN TOKENS
========================================================== */

export const Colors = {
    primary: "#173B63",
    secondary: "#2F65B8",

    text: "#333333",
    muted: "#666666",
    light: "#D7DDE6",

    white: "#FFFFFF",
};

export const Typography = {

    name: px(34),

    designation: px(16),

    heading: px(14),

    role: px(15),

    body: px(13),

    company: px(13),

    caption: px(12),

    small: px(11),

};

export const Spacing = {

    xs: px(2),

    sm: px(6),

    md: px(12),

    lg: px(18),

    xl: px(20),

    xxl: px(28),

};

export const Layout = {

    // NOTE: replace the 40s below with your web preview's actual
    // page padding (e.g. Tailwind `p-10` = 40px) once you confirm it.

    pagePaddingTop: px(40),

    pagePaddingBottom: px(40),

    pagePaddingHorizontal: px(40),

};

/* ==========================================================
   PDF STYLES
========================================================== */

export const styles = StyleSheet.create({

    /* =======================
       PAGE
    ======================= */

    page: {

        backgroundColor: Colors.white,

        color: Colors.text,

        fontFamily: "Helvetica",

        fontSize: Typography.body,

        paddingTop: Layout.pagePaddingTop,

        paddingBottom: Layout.pagePaddingBottom,

        paddingLeft: Layout.pagePaddingHorizontal,

        paddingRight: Layout.pagePaddingHorizontal,

    },

    /* =======================
       HEADER
    ======================= */

    header: {
        alignItems: "flex-start",
        marginBottom: Spacing.lg,
    },

    name: {

        fontSize: Typography.name,

        fontWeight: "bold",

        color: Colors.primary,

        lineHeight: 1.15,

    },

    title: {

        marginTop: Spacing.sm,

        fontSize: Typography.designation,

        fontWeight: "bold",

        color: Colors.secondary,

    },

    contactRow: {
        marginTop: Spacing.md,
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
    },

    contact: {

        fontSize: Typography.caption,

        color: "#555555",

    },

    separator: {

        marginHorizontal: px(6),

        color: "#999999",

    },

    /* =======================
       SECTION
    ======================= */

    section: {

        marginBottom: Spacing.lg,

    },

    sectionHeading: {

        fontSize: Typography.heading,

        fontWeight: "bold",

        textTransform: "uppercase",

        letterSpacing: px(1.1),

        color: Colors.primary,

        borderBottomWidth: px(2),

        borderBottomColor: Colors.secondary,

        paddingBottom: Spacing.sm,

        marginBottom: Spacing.xl,

    },

    /* =======================
       SUMMARY
    ======================= */

    summary: {

        fontSize: Typography.body,

        color: Colors.text,

        textAlign: "justify",

        lineHeight: 1.45,

    },

    /* =======================
       COMMON
    ======================= */

    row: {

        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "flex-start",

    },

    /* =======================
       EXPERIENCE
    ======================= */

    experienceItem: {

        marginBottom: px(14),

    },

    role: {

        fontSize: Typography.role,

        fontWeight: "bold",

        color: Colors.primary,

        lineHeight: 1.25,

    },

    companyInline: {

        fontSize: Typography.caption,

        color: Colors.secondary,

    },

    bulletList: {

        marginTop: px(10),

    },

    bulletRow: {

        flexDirection: "row",

        marginBottom: px(3),

    },

    bullet: {

        width: px(12),

        fontSize: Typography.body,

    },

    bulletText: {

        flex: 1,

        fontSize: Typography.body,

        lineHeight: 1.6,

        color: Colors.text,

    },

    /* =======================
       EDUCATION
    ======================= */

    educationItem: {

        marginBottom: px(12),

    },

    field: {

        fontSize: px(12),

        fontWeight: "bold",

        color: Colors.primary,

        lineHeight: 1.25,

    },

    company: {

        marginTop: px(3),

        fontSize: px(14),

        color: Colors.secondary,

    },

    date: {

        fontSize: Typography.caption,

        fontWeight: "bold",

        color: Colors.muted,

    },

    /* =======================
           SKILLS
    ======================= */

    skillsRow: {

        flexDirection: "row",

        marginBottom: px(6),

    },

    skill: {

        width: "20%",

        fontSize: Typography.body,

        color: Colors.text,

    },


    /* =======================
           TRAINING
    ======================= */


    trainingRow: {

        flexDirection: "row",

        marginBottom: px(12),

    },

    trainingItem: {

        width: "33.33%",

        paddingRight: px(20),

    },


    /* =======================
          LANGUAGES
   ======================= */



    languageRow: {

        flexDirection: "row",

        marginBottom: px(10),

    },

    languageItem: {

        width: "50%",

        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center",

        paddingRight: px(24),

    },

    languageName: {

        fontSize: Typography.body,

        color: Colors.text,

    },

    rating: {

        flexDirection: "row",

    },

    dot: {

        width: px(8),

        height: px(8),

        borderRadius: px(4),

        marginLeft: px(4),

        backgroundColor: Colors.light,

    },

    dotFilled: {

        backgroundColor: Colors.secondary,

    },


    /* =======================
       TRAINING
======================= */

    trainingRow: {

        flexDirection: "row",

        marginBottom: px(12),

    },

    trainingItem: {

        width: "33.33%",

        paddingRight: px(20),

    },

    trainingTitle: {

        fontSize: Typography.body,

        fontWeight: "bold",

        color: Colors.primary,

        lineHeight: 1.3,

    },

    trainingInstitution: {

        marginTop: px(2),

        fontSize: Typography.caption,

        fontWeight: "normal",

        color: Colors.secondary,

    },




});