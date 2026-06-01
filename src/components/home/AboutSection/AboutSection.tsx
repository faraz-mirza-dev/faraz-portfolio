import { Reveal } from "@/components/motion";
import { aboutData } from "@/data/about";

export default function AboutSection() {
  return (
    <section className="about-preview">
      <Reveal className="container" delay={0.05}>
        <div className="row">
          <div className="col-12">
            <h2>{aboutData.heading}</h2>
            <p>{aboutData.description[0]}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
