import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { documentTitle } from "@/lib/siteMeta";
import BlogPostContent from "@/components/blog/BlogPostContent/BlogPostContent";
import { Reveal } from "@/components/motion";
import { blogPosts } from "@/data/blog";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>{documentTitle("Post not found")}</title>
        </Helmet>
        <div className="container py-5">Post not found</div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{documentTitle(post.title)}</title>
        <meta name="description" content={post.excerpt || "Blog post"} />
      </Helmet>
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <Reveal className="position-relative" y={14}>
          <h1>
            my <span>blog</span>
          </h1>
          <span className="title-bg">posts</span>
        </Reveal>
      </section>

      <main className="ib-main-content">
        <BlogPostContent post={post} />
      </main>
    </>
  );
}
