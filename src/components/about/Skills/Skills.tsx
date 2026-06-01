import { Reveal } from "@/components/motion";
import { skills } from "@/data/about";
import type { Skill } from "@/types";
import type { ReactElement } from "react";

export default function Skills(): ReactElement {
  return (
    <section className="skills-section">
      <Reveal className="container" delay={0.04}>
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          {skills.map((skill: Skill) => (
            <div key={skill.name} className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className={`c100 p${skill.percentage}`}>
                <span>{skill.percentage}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                {skill.name}
              </h6>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
