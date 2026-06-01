import { Reveal } from "@/components/motion";
import { education } from "@/data/about";
import type { EducationItem } from "@/types";

export default function Education() {
  return (
    <div className="col-lg-6 m-15px-tb">
      <Reveal className="resume-box" delay={0.1}>
        <ul>
          {education.map((item: EducationItem) => (
            <li key={`${item.institution}-${item.period}`}>
              <div className="icon">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <span className="time open-sans-font text-uppercase">
                {item.period}
              </span>
              <h5 className="poppins-font text-uppercase">
                {item.degree}{" "}
                <span className="place open-sans-font">{item.institution}</span>
              </h5>
              <p className="open-sans-font">{item.description}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
