import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion";
import { projects } from "@/data/projects";
import HomePortfolioGrid from "@/components/home/PortfolioSection/HomePortfolioGrid";

const HOME_PORTFOLIO_MAX = 6;

export default function PortfolioSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const source =
    featuredProjects.length > 0 ? featuredProjects : projects;
  const displayProjects = source.slice(0, HOME_PORTFOLIO_MAX);

  return (
    <section className="portfolio">
      <Reveal className="container" delay={0.05}>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Portfolio</h2>
            <HomePortfolioGrid>
              {displayProjects.map((project, index) => (
                <div key={project.id} className="portfolio-item">
                  <div className="portfolio-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="img-fluid"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <div className="portfolio-overlay">
                      <h3>{project.title}</h3>
                      <p>{project.category}</p>
                      <Link
                        to={`/portfolio/${project.slug}`}
                        className="portfolio-link"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </HomePortfolioGrid>
            <div className="text-center mt-5">
              <Link to="/portfolio" className="button">
                <span className="button-text">View All Projects</span>
                <span className="button-icon fa fa-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
