import { Link } from "react-router-dom";
import BlogCard from "@/components/blog/BlogCard/BlogCard";
import { Reveal } from "@/components/motion";
import { getBlogListPage } from "@/data/blog";

interface BlogGridProps {
  currentPage: number;
}

export default function BlogGrid({ currentPage }: BlogGridProps) {
  const { posts, totalPages, currentPage: page } =
    getBlogListPage(currentPage);

  return (
    <section className="main-content revealator-slideup revealator-once revealator-delay1">
      <Reveal className="container" delay={0.04}>
        <div className="row">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}

          {totalPages > 1 ? (
            <div className="col-12 mt-4">
              <nav aria-label="Blog pagination">
                <ul className="pagination justify-content-center mb-0">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (n) => (
                      <li
                        key={n}
                        className={`page-item${n === page ? " active" : ""}`}
                      >
                        <Link
                          className="page-link"
                          to={n === 1 ? "/blog" : `/blog?page=${n}`}
                          preventScrollReset
                        >
                          {n}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
            </div>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
