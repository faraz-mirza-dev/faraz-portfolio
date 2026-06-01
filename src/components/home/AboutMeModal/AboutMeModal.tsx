import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useCallback, useEffect, useId, useRef, type RefObject } from "react";
import { createPortal } from "react-dom";
import { easings } from "@/components/motion";
import {
  aboutData,
  education,
  experience,
  personalInfo,
  skills,
} from "@/data/about";
import type { EducationItem, ExperienceItem, Skill } from "@/types";

const shellVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: easings.out },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.22, ease: easings.out },
  },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: easings.out },
  },
};

function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);
}

function useFocusTrap(
  active: boolean,
  containerRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!active || !containerRef.current) return;
    const root = containerRef.current;
    const selector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const getFocusables = () =>
      Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
      );

    const focusables = getFocusables();
    focusables[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = getFocusables();
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    root.addEventListener("keydown", onKeyDown);
    return () => root.removeEventListener("keydown", onKeyDown);
  }, [active, containerRef]);
}

export type AboutMeModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function AboutMeModal({ open, onClose }: AboutMeModalProps) {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  const onKeyEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyEscape);
    return () => window.removeEventListener("keydown", onKeyEscape);
  }, [open, onKeyEscape]);

  useBodyScrollLock(open);
  useFocusTrap(open, panelRef);

  if (typeof document === "undefined") return null;

  const instant = reduceMotion ?? false;

  const staggerParent: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: instant ? 0 : 0.06,
        delayChildren: instant ? 0 : 0.04,
      },
    },
  };

  const staggerChild: Variants = {
    hidden: { opacity: 0, y: instant ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: instant ? 0.01 : 0.42, ease: easings.out },
    },
  };

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="about-me-modal-shell"
          className="about-me-modal-root"
          role="presentation"
          variants={shellVariants}
          initial={instant ? false : "hidden"}
          animate="visible"
          exit="exit"
        >
          <div
            className="about-me-modal-backdrop"
            aria-hidden
            onClick={onClose}
          />
          <div className="about-me-modal-scroll">
            <motion.div
              ref={panelRef}
              id="about-me-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="about about-me-modal-panel"
              initial={instant ? false : "hidden"}
              animate="visible"
              variants={panelVariants}
              tabIndex={-1}
            >
              <motion.button
                type="button"
                className="about-me-modal-close"
                aria-label="Close"
                onClick={onClose}
                whileHover={instant ? undefined : { scale: 1.06, opacity: 1 }}
                whileTap={instant ? undefined : { scale: 0.94 }}
                transition={{ duration: 0.2, ease: easings.out }}
              >
                <i className="fa fa-times" aria-hidden />
              </motion.button>

              <section className="title-section text-left text-sm-center about-me-modal-title">
                <div className="position-relative">
                  <h1 id={titleId}>
                    {aboutData.pageTitleLead}{" "}
                    <span>{aboutData.pageTitleAccent}</span>
                  </h1>
                  <span className="title-bg">{aboutData.subheading}</span>
                </div>
              </section>

              <section className="main-content about-me-modal-section">
                <div className="container-fluid px-3 px-sm-4">
                  <div className="row">
                    <div className="col-12 col-lg-5 col-xl-6">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                            personal infos
                          </h3>
                        </div>
                        <div className="col-6">
                          <ul className="about-list list-unstyled open-sans-font">
                            {personalInfo.left.map((row) => (
                              <li key={row.label}>
                                <span className="title">{row.label} :</span>{" "}
                                <span
                                  className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block${
                                    row.emphasis === "available"
                                      ? " value--available"
                                      : ""
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
                    <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                      <motion.div
                        className="row"
                        variants={staggerParent}
                        initial="hidden"
                        animate="visible"
                      >
                        {aboutData.stats.map((stat, index) => (
                          <motion.div
                            key={`${stat.value}-${stat.label}`}
                            className="col-6"
                            variants={staggerChild}
                          >
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
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="separator about-me-modal-sep" />

              <section className="skills-section about-me-modal-section pb-4">
                <div className="container-fluid px-3 px-sm-4">
                  <motion.div
                    className="row"
                    variants={staggerParent}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div className="col-12" variants={staggerChild}>
                      <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                        My Skills
                      </h3>
                    </motion.div>
                    {skills.map((skill: Skill) => (
                      <motion.div
                        key={skill.name}
                        className="col-6 col-md-3 mb-3 mb-sm-5"
                        variants={staggerChild}
                      >
                        <div className={`c100 p${skill.percentage}`}>
                          <span>{skill.percentage}%</span>
                          <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                          </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                          {skill.name}
                        </h6>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              <hr className="separator about-me-modal-sep" />

              <section className="about-me-modal-section pb-5">
                <div className="container-fluid px-3 px-sm-4">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="text-uppercase pb-4 pb-sm-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                        Experience <span>&</span> Education
                      </h3>
                    </div>
                    <div className="col-lg-6 m-15px-tb">
                      <div className="resume-box">
                        <motion.ul
                          variants={staggerParent}
                          initial="hidden"
                          animate="visible"
                        >
                          {experience.map((item: ExperienceItem) => (
                            <motion.li
                              key={`${item.company}-${item.period}`}
                              variants={staggerChild}
                            >
                              <div className="icon">
                                <i className="fa fa-briefcase" />
                              </div>
                              <span className="time open-sans-font text-uppercase">
                                {item.period}
                              </span>
                              <h5 className="poppins-font text-uppercase">
                                {item.role}{" "}
                                <span className="place open-sans-font">
                                  {item.company}
                                </span>
                              </h5>
                              <p className="open-sans-font">
                                {item.description}
                              </p>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                    <div className="col-lg-6 m-15px-tb">
                      <div className="resume-box">
                        <motion.ul
                          variants={staggerParent}
                          initial="hidden"
                          animate="visible"
                        >
                          {education.map((item: EducationItem) => (
                            <motion.li
                              key={`${item.institution}-${item.period}`}
                              variants={staggerChild}
                            >
                              <div className="icon">
                                <i className="fa fa-graduation-cap" />
                              </div>
                              <span className="time open-sans-font text-uppercase">
                                {item.period}
                              </span>
                              <h5 className="poppins-font text-uppercase">
                                {item.degree}{" "}
                                <span className="place open-sans-font">
                                  {item.institution}
                                </span>
                              </h5>
                              <p className="open-sans-font">
                                {item.description}
                              </p>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-5 mb-0">
                    <Link to="/about" className="button" onClick={onClose}>
                      <span className="button-text">Read More About Me</span>
                      <span
                        className="button-icon fa fa-arrow-right"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
