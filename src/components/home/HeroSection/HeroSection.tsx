import { useState } from "react";
import AboutMeModal from "@/components/home/AboutMeModal/AboutMeModal";
import { FadeInMount } from "@/components/motion";
import { heroData } from "@/data/hero";
import { useTyped } from "@/hooks/useAnimations";

export default function HeroSection() {
  const [aboutOpen, setAboutOpen] = useState(false);
  useTyped(".typed-text", heroData.roles);

  return (
    <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
      <div className="color-block d-none d-lg-block"></div>
      <div className="row home-details-container align-items-center">
        <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <FadeInMount delay={0.08}>
          <div>
            <img
              src={heroData.image}
              alt="my picture"
              className="img-fluid main-img-mobile d-block d-lg-none"
              width={300}
              height={300}
              style={{ transform: "scaleX(-1)" }}
            />
            <h1 className="text-uppercase poppins-font">
              {heroData.greeting} {heroData.name}.
              <span className="typed-text">{heroData.roles[0]}</span>
            </h1>
            <p className="open-sans-font">{heroData.description}</p>
            <button
              type="button"
              className="button"
              onClick={() => setAboutOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={aboutOpen}
              aria-controls="about-me-modal"
            >
              <span className="button-text">{heroData.ctaPrimary.label}</span>
              <span className="button-icon fa fa-arrow-right" aria-hidden />
            </button>
          </div>
          </FadeInMount>
        </div>
      </div>
      <AboutMeModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </section>
  );
}
