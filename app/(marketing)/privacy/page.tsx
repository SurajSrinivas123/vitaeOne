import PrivacyHero from "@/components/privacy/PrivacyHero";
import DataControl from "@/components/privacy/DataControl";
import PrivacyRisks from "@/components/privacy/PrivacyRisks";
import WhyVitaeOne from "@/components/privacy/WhyVitaeOne";
import Promise from "@/components/privacy/Promise";

export default function PrivacyPage() {
    return (
        <>
            <PrivacyHero />
            <DataControl />
            <PrivacyRisks />
            <WhyVitaeOne />
            <Promise />
        </>
    );
}