import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="page-wrapper">
            <Navbar />

            <main className="page-content">
                {children}
            </main>

            <Footer />
        </div>
    );
}