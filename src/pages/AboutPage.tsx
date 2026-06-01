import { Helmet } from "react-helmet-async";
import AboutHero from "@/components/about/AboutHero/AboutHero";
import { documentTitle } from "@/lib/siteMeta";
import Education from "@/components/about/Education/Education";
import Experience from "@/components/about/Experience/Experience";
import Skills from "@/components/about/Skills/Skills";
import { Reveal } from "@/components/motion";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{documentTitle("About")}</title>
        <meta
          name="description"
          content="About me — background, skills, experience, and education."
        />
      </Helmet>
      <main>
        <AboutHero />
        <hr className="separator" />
        <Skills />
        <hr className="separator mt-1" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Reveal delay={0.06}>
                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                  Experience <span>&</span> Education
                </h3>
              </Reveal>
            </div>
            <Experience />
            <Education />
          </div>
        </div>
      </main>
    </>
  );
}
