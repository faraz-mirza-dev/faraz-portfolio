import { Reveal } from "@/components/motion";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter/PortfolioFilter";

export default function PortfolioGrid() {
  return (
    <>
      {/* Page Title Starts */}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <Reveal className="position-relative" y={14}>
          <h1>
            my <span>portfolio</span>
          </h1>
          <span className="title-bg">works</span>
        </Reveal>
      </section>
      {/* Page Title Ends */}

      {/* Main Content Starts */}
      <PortfolioFilter />
      {/* Main Content Ends */}
    </>
  );
}
