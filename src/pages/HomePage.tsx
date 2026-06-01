import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import { documentTitle } from "@/lib/siteMeta";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{documentTitle("Home")}</title>
        <meta
          name="description"
          content="Welcome — developer and creative portfolio home."
        />
      </Helmet>
      <main className="ib-main-content">
        <HeroSection />
      </main>
    </>
  );
}
