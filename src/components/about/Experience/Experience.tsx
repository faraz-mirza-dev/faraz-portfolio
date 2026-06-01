import { Reveal } from "@/components/motion";
import { experience } from "@/data/about";
import type { ExperienceItem } from "@/types";

export default function Experience() {
  return (
    <div className="col-lg-6 m-15px-tb">
      <Reveal className="resume-box" delay={0.06}>
        <ul>
          {experience.map((item: ExperienceItem) => (
            <li key={`${item.company}-${item.period}`}>
              <div className="icon">
                <i className="fa fa-briefcase"></i>
              </div>
              <span className="time open-sans-font text-uppercase">
                {item.period}
              </span>
              <h5 className="poppins-font text-uppercase">
                {item.role}{" "}
                <span className="place open-sans-font">{item.company}</span>
              </h5>
              <p className="open-sans-font">{item.description}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
