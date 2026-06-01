import { Helmet } from "react-helmet-async";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid/PortfolioGrid";
import { documentTitle } from "@/lib/siteMeta";

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>{documentTitle("Portfolio")}</title>
        <meta
          name="description"
          content="Selected work and project gallery."
        />
      </Helmet>
      <main className="ib-main-content">
        <PortfolioGrid />
      </main>
    </>
  );
}
