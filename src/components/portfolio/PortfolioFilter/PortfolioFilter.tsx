import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { createPortal } from "react-dom";
import {
  portfolioFilterNavContainer,
  portfolioFilterNavItem,
  portfolioGridContainer,
  portfolioGridItem,
} from "@/components/motion";
import { projectsForPortfolioGrid } from "@/components/portfolio/portfolioGridProjects";
import { projects } from "@/data/projects";
import type { PortfolioFilterTab, Project } from "@/types";

const FILTER_TABS: { key: PortfolioFilterTab; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "logo", label: "LOGO" },
  { key: "video", label: "VIDEO" },
  { key: "graphic design", label: "GRAPHIC DESIGN" },
  { key: "mockup", label: "MOCKUP" },
];

function ProjectMedia({ project }: { project: Project }): ReactElement {
  const type = project.projectType ?? "image";
  const slides = project.sliderImages ?? [];

  if (type === "youtube" && project.youtubeEmbedUrl) {
    return (
      <div className="videocontainer">
        <iframe
          className="youtube-video"
          src={project.youtubeEmbedUrl}
          title={project.title}
          allowFullScreen
        />
      </div>
    );
  }

  if (type === "local-video" && project.videoSrc) {
    return (
      <video
        className="responsive-video"
        controls
        poster={project.image}
      >
        <source src={project.videoSrc} type="video/mp4" />
      </video>
    );
  }

  if (type === "slider" && slides.length > 0) {
    const firstSlide = slides[0];
    return (
      <img
        src={firstSlide}
        alt=""
        width={900}
        height={600}
        className="img-fluid"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      width={900}
      height={600}
      className="img-fluid"
      loading="lazy"
      decoding="async"
    />
  );
}

function PortfolioGridTile({
  project,
  index,
  animated,
  onOpen,
}: {
  project: Project;
  index: number;
  animated: boolean;
  onOpen: (slug: string) => void;
}): ReactElement {
  const open = (): void => onOpen(project.slug);
  const onKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  };

  const figure = (
    <figure>
      <img
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        loading={index < 3 ? "eager" : "lazy"}
        decoding="async"
      />
      <div>
        <span>{project.title}</span>
      </div>
    </figure>
  );

  if (animated) {
    return (
      <motion.li
        variants={portfolioGridItem}
        role="button"
        tabIndex={0}
        onClick={open}
        onKeyDown={onKeyDown}
      >
        {figure}
      </motion.li>
    );
  }

  return (
    <li role="button" tabIndex={0} onClick={open} onKeyDown={onKeyDown}>
      {figure}
    </li>
  );
}

function SlideshowFigcaption({ project }: { project: Project }): ReactElement {
  const link = project.link ?? "www.envato.com";
  return (
    <figcaption>
      <h3>{project.title}</h3>
      <div className="row open-sans-font">
        <div className="col-12 col-sm-6 mb-2">
          <i className="fa fa-file-text-o pr-2"></i>
          <span className="project-label">Project </span>:{" "}
          <span className="ft-wt-600 uppercase">{project.category}</span>
        </div>
        <div className="col-12 col-sm-6 mb-2">
          <i className="fa fa-user-o pr-2"></i>
          <span className="project-label">Client </span>:{" "}
          <span className="ft-wt-600 uppercase">{project.client}</span>
        </div>
        <div className="col-12 col-sm-6 mb-2">
          <i className="fa fa-code pr-2"></i>
          <span className="project-label">Langages </span>:{" "}
          <span className="ft-wt-600 uppercase">
            {(project.tags ?? []).join(", ")}
          </span>
        </div>
        <div className="col-12 col-sm-6 mb-2">
          <i className="fa fa-external-link pr-2"></i>
          <span className="project-label">Preview </span>:{" "}
          <span className="ft-wt-600 uppercase">
            <a href={`https://${link}`} target="_blank" rel="noreferrer">
              {link}
            </a>
          </span>
        </div>
      </div>
    </figcaption>
  );
}

const SLIDESHOW_NAV_ITEMS = [
  {
    className: "icon nav-prev",
    src: "/img/projects/navigation/left-arrow.png",
    alt: "previous" as const,
  },
  {
    className: "icon nav-next",
    src: "/img/projects/navigation/right-arrow.png",
    alt: "next" as const,
  },
  {
    className: "nav-close",
    src: "/img/projects/navigation/close-button.png",
    alt: "close" as const,
  },
] as const;

function SlideshowNav({
  onPrev,
  onNext,
  onClose,
}: {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}): ReactElement {
  const handlers = [onPrev, onNext, onClose] as const;
  return (
    <nav onClick={(e) => e.stopPropagation()}>
      {SLIDESHOW_NAV_ITEMS.map((item, i) => (
        <span
          key={item.alt}
          className={item.className}
          onClick={handlers[i]}
        >
          <img src={item.src} alt={item.alt} width={24} height={24} />
        </span>
      ))}
    </nav>
  );
}

export default function PortfolioFilter(): ReactElement {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterTab>("all");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [slideAnimNonce, setSlideAnimNonce] = useState(0);
  const gridStageRef = useRef<HTMLDivElement>(null);
  const gridHeightBeforeFilterRef = useRef<number | null>(null);

  const gridProjects = useMemo(
    () => projectsForPortfolioGrid(activeFilter, projects),
    [activeFilter],
  );

  /** Slug is hidden when the current filter no longer includes that project (no sync setState in an effect). */
  const visibleSlug = useMemo(() => {
    if (activeSlug === null) return null;
    return gridProjects.some((p) => p.slug === activeSlug)
      ? activeSlug
      : null;
  }, [activeSlug, gridProjects]);

  const activeProject = useMemo(() => {
    if (!visibleSlug) return undefined;
    return gridProjects.find((p) => p.slug === visibleSlug);
  }, [visibleSlug, gridProjects]);

  const openSlideshow = (slug: string): void => {
    setSlideDirection("next");
    setSlideAnimNonce((n) => n + 1);
    setActiveSlug(slug);
  };

  const closeSlideshow = useCallback((): void => {
    setActiveSlug(null);
  }, []);

  const stepSlideshow = useCallback(
    (delta: number): void => {
      setActiveSlug((current) => {
        if (!current) return current;
        const idx = gridProjects.findIndex((p) => p.slug === current);
        if (idx === -1) return null;
        const len = gridProjects.length;
        if (len === 0) return null;
        const next = (idx + delta + len) % len;
        return gridProjects[next]?.slug ?? null;
      });
    },
    [gridProjects],
  );

  const showPrev = useCallback((): void => {
    if (!visibleSlug) return;
    if (gridProjects.length <= 1) return;
    setSlideDirection("prev");
    setSlideAnimNonce((n) => n + 1);
    stepSlideshow(-1);
  }, [visibleSlug, gridProjects.length, stepSlideshow]);

  const showNext = useCallback((): void => {
    if (!visibleSlug) return;
    if (gridProjects.length <= 1) return;
    setSlideDirection("next");
    setSlideAnimNonce((n) => n + 1);
    stepSlideshow(1);
  }, [visibleSlug, gridProjects.length, stepSlideshow]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (!visibleSlug) return;
      if (event.key === "Escape") closeSlideshow();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visibleSlug, closeSlideshow, showPrev, showNext]);

  /** Lock page scroll behind the portaled lightbox (overflow alone is not enough on some UAs). */
  useEffect(() => {
    if (!visibleSlug) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    const prevBodyPaddingRight = body.style.paddingRight;
    const scrollY = window.scrollY;

    const gutter = window.innerWidth - html.clientWidth;
    if (gutter > 0) {
      body.style.paddingRight = `${gutter}px`;
    }
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      body.style.paddingRight = prevBodyPaddingRight;
      window.scrollTo(0, scrollY);
    };
  }, [visibleSlug]);

  useLayoutEffect(() => {
    const el = gridStageRef.current;
    const start = gridHeightBeforeFilterRef.current;
    gridHeightBeforeFilterRef.current = null;

    if (!el || start === null) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const end = el.getBoundingClientRect().height;
    if (Math.abs(start - end) < 4) return;

    if (prefersReduced) return;

    el.style.height = `${start}px`;
    el.style.overflow = "hidden";
    void el.offsetHeight;

    el.style.transition = "height 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    const raf = requestAnimationFrame(() => {
      el.style.height = `${end}px`;
    });

    const onEnd = (e: TransitionEvent): void => {
      if (e.propertyName !== "height" || e.target !== el) return;
      el.style.transition = "";
      el.style.height = "auto";
      el.style.overflow = "";
      el.removeEventListener("transitionend", onEnd);
    };
    el.addEventListener("transitionend", onEnd);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("transitionend", onEnd);
      el.style.transition = "";
      el.style.height = "auto";
      el.style.overflow = "";
    };
  }, [gridProjects]);

  const handleFilterChange = (next: PortfolioFilterTab): void => {
    if (next === activeFilter) return;
    const stage = gridStageRef.current;
    if (stage) {
      gridHeightBeforeFilterRef.current = stage.getBoundingClientRect().height;
    }
    setActiveFilter(next);
    setActiveSlug((slug) => {
      if (slug === null) return null;
      const list = projectsForPortfolioGrid(next, projects);
      return list.some((p) => p.slug === slug) ? slug : null;
    });
  };

  const gridTiles = gridProjects.map((project, index) => (
    <PortfolioGridTile
      key={project.id}
      project={project}
      index={index}
      animated={!prefersReducedMotion}
      onOpen={openSlideshow}
    />
  ));

  const slideshow = (
    <section
      className={`slideshow${visibleSlug ? " slideshow--open" : ""}`}
      aria-hidden={!visibleSlug}
    >
      <ul>
        {activeProject ? (
          <li key={slideAnimNonce} className="show current">
            <figure
              className={`portfolio-slide-figure portfolio-slide-${slideDirection}`}
            >
              <SlideshowFigcaption project={activeProject} />
              <ProjectMedia project={activeProject} />
            </figure>
          </li>
        ) : null}
      </ul>

      <SlideshowNav
        onPrev={showPrev}
        onNext={showNext}
        onClose={closeSlideshow}
      />
    </section>
  );

  return (
    <>
      <section className="main-content text-center revealator-slideup revealator-once revealator-delay1">
        <div
          id="grid-gallery"
          className={`container grid-gallery ${visibleSlug ? "slideshow-open" : ""}`}
        >
          <section className="grid-wrap">
            <motion.nav
              className="portfolio-filter-nav"
              aria-label="Portfolio categories"
              variants={
                prefersReducedMotion ? undefined : portfolioFilterNavContainer
              }
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
            >
              {FILTER_TABS.map((tab) => (
                <motion.button
                  key={tab.key}
                  type="button"
                  className={`portfolio-filter-btn ${activeFilter === tab.key ? "active" : ""}`}
                  variants={
                    prefersReducedMotion ? undefined : portfolioFilterNavItem
                  }
                  onClick={() => handleFilterChange(tab.key)}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </motion.nav>

            <div ref={gridStageRef} className="portfolio-grid-stage">
              {prefersReducedMotion ? (
                <ul
                  key={activeFilter}
                  className="row grid portfolio-grid-animated"
                >
                  {gridTiles}
                </ul>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeFilter}
                    className="row grid"
                    variants={portfolioGridContainer}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {gridTiles}
                  </motion.ul>
                </AnimatePresence>
              )}
            </div>
          </section>
        </div>
      </section>
      {/* Portal to document.body so fixed lightbox z-index stacks above layout (Rtl shell uses transform). */}
      {createPortal(slideshow, document.body)}
    </>
  );
}
