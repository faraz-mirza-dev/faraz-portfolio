import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <Reveal
      className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
      delay={index * 0.05}
    >
      <article className="post-container">
        <div className="post-thumb">
          <Link
            to={`/blog/${post.slug}`}
            className="d-block position-relative overflow-hidden"
          >
            <img
              src={post.image}
              alt="Blog Post"
              className="img-fluid"
              width={400}
              height={250}
              loading="lazy"
              decoding="async"
            />
          </Link>
        </div>
        <div className="post-content">
          <div className="entry-header">
            <h3>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
          </div>
          <div className="entry-content open-sans-font">
            <p>{post.excerpt}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
