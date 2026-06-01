import { Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { documentTitle, SITE_TITLE_SUFFIX } from "@/lib/siteMeta";
import RootLayout from "@/layouts/RootLayout";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import PortfolioPage from "@/pages/PortfolioPage";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{documentTitle("Portfolio")}</title>
        <meta name="description" content={SITE_TITLE_SUFFIX} />
      </Helmet>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}
