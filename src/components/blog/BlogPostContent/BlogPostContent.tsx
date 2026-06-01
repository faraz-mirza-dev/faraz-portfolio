import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion";
import { BLOG_SIDEBAR_TAG_LABELS, blogPosts } from "@/data/blog";
import type { BlogPost } from "@/types";

interface BlogPostContentProps {
  post: BlogPost;
}

function sidebarListDate(p: BlogPost): string {
  return p.listDate ?? p.date;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const recentPosts = others.slice(0, 4);
  const popularPosts = [...others].reverse().slice(0, 4);
  const tagLabels = [
    ...new Set<string>([
      ...BLOG_SIDEBAR_TAG_LABELS,
      ...post.tags.map((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    ]),
  ];

  return (
    <section className="main-content revealator-slideup revealator-once revealator-delay1">
      <div className="container">
        <div className="row">
          <Reveal className="col-lg-8" delay={0.04}>
            <article>
              <div className="meta open-sans-font">
                <span>
                  <i className="fa fa-user"></i> {post.author}
                </span>
                <span className="date">
                  <i className="fa fa-calendar"></i> {post.date}
                </span>
                <span>
                  <i className="fa fa-tags"></i> {post.category}
                </span>
              </div>

              <h1 className="text-uppercase text-capitalize">{post.title}</h1>

              <img
                src={post.image}
                alt={post.title}
                className="img-fluid"
                width={900}
                height={480}
                fetchPriority="high"
                decoding="async"
              />

              <div className="blog-excerpt open-sans-font pb-5">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </article>
          </Reveal>

          <Reveal className="col-lg-4" delay={0.1}>
            <aside className="ib-sidebar-widget-wrapper">
              <div className="ib-single-widget ib-widget-search">
                <div className="inner">
                  <form action="#" className="ib-search-style-1" role="search">
                    <input
                      type="search"
                      name="q"
                      placeholder="Search Courses"
                      aria-label="Search courses"
                    />
                    <button className="search-btn" type="button" aria-label="Search">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div className="ib-single-widget ib-widget-recent">
                <div className="inner">
                  <h4 className="ib-widget-title">Recent Post</h4>
                  <ul className="ib-sidebar-list-wrapper recent-post-list">
                    {recentPosts.map((p) => (
                      <li key={`recent-${p.slug}`}>
                        <div className="thumbnail">
                          <Link to={`/blog/${p.slug}`}>
                            <img
                              src={p.image}
                              alt=""
                              width={60}
                              height={60}
                              loading="lazy"
                              decoding="async"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                          </h6>
                          <ul className="ib-meta">
                            <li>
                              <i className="fa fa-clock"></i>
                              {sidebarListDate(p)}
                            </li>
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ib-single-widget ib-widget-recent">
                <div className="inner">
                  <h4 className="ib-widget-title">Popular Post</h4>
                  <ul className="ib-sidebar-list-wrapper recent-post-list">
                    {popularPosts.map((p) => (
                      <li key={`popular-${p.slug}`}>
                        <div className="thumbnail">
                          <Link to={`/blog/${p.slug}`}>
                            <img
                              src={p.image}
                              alt=""
                              width={60}
                              height={60}
                              loading="lazy"
                              decoding="async"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                          </h6>
                          <ul className="ib-meta">
                            <li>
                              <i className="fa fa-clock"></i>
                              {sidebarListDate(p)}
                            </li>
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ib-single-widget ib-widget-tag">
                <div className="inner">
                  <h4 className="ib-widget-title">Tags</h4>
                  <div className="ib-sidebar-list-wrapper ib-tag-list">
                    {tagLabels.map((label) => (
                      <Link key={label} to="/blog">
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
