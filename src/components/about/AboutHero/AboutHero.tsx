import { Reveal } from "@/components/motion";
import { aboutData, personalInfo } from "@/data/about";

export default function AboutHero() {
  return (
    <>
      {/* Page Title Starts */}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <Reveal className="position-relative" y={14}>
          <h1>
            {aboutData.pageTitleLead}{" "}
            <span>{aboutData.pageTitleAccent}</span>
          </h1>
          <span className="title-bg">{aboutData.subheading}</span>
        </Reveal>
      </section>
      {/* Page Title Ends */}

      {/* Personal Info Section */}
      <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <Reveal className="container" delay={0.05}>
          <div className="row">
            {/* Personal Info Starts */}
            <div className="col-12 col-lg-5 col-xl-6">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                    personal infos
                  </h3>
                </div>
                <div className="col-12 d-block d-sm-none">
                  <img
                    src={aboutData.image}
                    alt="my picture"
                    className="img-fluid main-img-mobile"
                    width={300}
                    height={300}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="col-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    {personalInfo.left.map((row) => (
                      <li key={row.label}>
                        {" "}
                        <span className="title">{row.label} :</span>{" "}
                        <span
                          className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block${
                            row.emphasis === "available" ? " value--available" : ""
                          }`}
                        >
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    {personalInfo.right.map((row) => (
                      <li key={row.label}>
                        {" "}
                        <span className="title">{row.label} :</span>{" "}
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-12 mt-3">
                  <a
                    className="button"
                    href={aboutData.cvLink}
                    download="CV.pdf"
                  >
                    <span className="button-text">Download CV</span>
                    <span
                      className="button-icon fa fa-download"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* Personal Info Ends */}
            {/* Boxes Starts */}
            <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
              <div className="row">
                {aboutData.stats.map((stat, index) => (
                  <div key={index} className="col-6">
                    <div
                      className={`box-stats ${index < 2 ? "with-margin" : ""}`}
                    >
                      <h3 className="poppins-font position-relative">
                        {stat.value}
                      </h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">
                        {stat.label.split(" ")[0]}
                        <span className="d-block">
                          {stat.label.split(" ").slice(1).join(" ")}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Boxes Ends */}
          </div>
        </Reveal>
      </section>
    </>
  );
}
