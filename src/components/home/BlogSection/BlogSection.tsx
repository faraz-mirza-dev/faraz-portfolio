import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="blog">
      <Reveal className="container" delay={0.05}>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Latest Blog Posts</h2>
            <div className="blog-grid">
              {latestPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-image">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="img-fluid"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                      <span className="blog-category">{post.category}</span>
                    </div>
                    <h3>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read More <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link to="/blog" className="button">
                <span className="button-text">View All Posts</span>
                <span className="button-icon fa fa-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
