import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { documentTitle } from "@/lib/siteMeta";
import BlogGrid from "@/components/blog/BlogGrid/BlogGrid";
import { Reveal } from "@/components/motion";

export default function BlogPage() {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const parsed = parseInt(pageParam ?? "1", 10);
  const currentPage = Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;

  return (
    <>
      <Helmet>
        <title>{documentTitle("Blog")}</title>
        <meta name="description" content="Blog — articles and notes." />
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
        <BlogGrid currentPage={currentPage} />
      </main>
    </>
  );
}
