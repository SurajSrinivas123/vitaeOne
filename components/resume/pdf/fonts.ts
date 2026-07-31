import { Font } from "@react-pdf/renderer";

Font.register({
    family: "Helvetica",
    fonts: [
        {
            src: "Helvetica",
            fontWeight: "normal",
        },
        {
            src: "Helvetica-Bold",
            fontWeight: "bold",
        },
    ],
});