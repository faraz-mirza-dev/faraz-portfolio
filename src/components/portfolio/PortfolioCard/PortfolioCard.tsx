import type { Project } from "@/types";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <li>
      <figure>
        <img
          src={project.image}
          alt="Portfolio Image"
          width={400}
          height={300}
          loading="lazy"
          decoding="async"
        />
        <div>
          <span>{project.title}</span>
        </div>
      </figure>
    </li>
  );
}
