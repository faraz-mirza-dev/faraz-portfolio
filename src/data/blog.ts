import type { BlogPost } from "@/types";

/** Rich article body (matches `blog-post.html` structure). */
export const DEFAULT_BLOG_ARTICLE_HTML = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`.trim();

/** Tag pills in sidebar (template `blog-post.html`). */
export const BLOG_SIDEBAR_TAG_LABELS = [
  "Histudy",
  "Training",
  "Courses",
  "Learn",
  "English",
  "Online",
  "Kids",
  "Economic",
  "Math",
  "Marketing",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Own Your Audience by Creating an Email List",
    slug: "how-to-own-your-audience-by-creating-an-email-list",
    date: "9 January 2017",
    listDate: "28 Mar, 2025",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-1.jpg",
    author: "steve",
    readTime: "5 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 2,
    title: "Top 10 Toolkits for Deep Learning in 2020",
    slug: "top-10-toolkits-for-deep-learning-in-2020",
    date: "9 January 2017",
    listDate: "28 Mar, 2025",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-2.jpg",
    author: "steve",
    readTime: "5 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 3,
    title: "Everything You Need to Know About Web Accessibility",
    slug: "everything-you-need-to-know-about-web-accessibility",
    date: "9 January 2017",
    listDate: "26 Jan, 2025",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-3.jpg",
    author: "steve",
    readTime: "5 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 4,
    title: "How to Inject Humor & Comedy Into Your Brand",
    slug: "how-to-inject-humor-comedy-into-your-brand",
    date: "9 January 2017",
    listDate: "26 May, 2024",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-4.jpg",
    author: "steve",
    readTime: "5 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 5,
    title: "Women in Web Design: How To Achieve Success",
    slug: "women-in-web-design-how-to-achieve-success",
    date: "9 January 2017",
    listDate: "26 Mar, 2025",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-5.jpg",
    author: "steve",
    readTime: "5 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 6,
    title: "Evergreen versus topical content: An overview",
    slug: "evergreen-versus-topical-content-an-overview",
    date: "9 January 2017",
    listDate: "26 Mar, 2025",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-6.jpg",
    author: "steve",
    readTime: "5 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 7,
    title: "Building a Design System From Scratch",
    slug: "building-a-design-system-from-scratch",
    date: "12 February 2017",
    listDate: "2 Apr, 2025",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-1.jpg",
    author: "steve",
    readTime: "6 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "business", "design"],
  },
  {
    id: 8,
    title: "Why Performance Budgets Matter in 2026",
    slug: "why-performance-budgets-matter-in-2026",
    date: "18 February 2017",
    listDate: "5 Apr, 2025",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-2.jpg",
    author: "steve",
    readTime: "4 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "business", "economy"],
  },
  {
    id: 9,
    title: "A Practical Guide to Semantic HTML",
    slug: "a-practical-guide-to-semantic-html",
    date: "3 March 2017",
    listDate: "8 Apr, 2025",
    category: "wordpress, business, economy, design",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    image: "/faraz-portfolio/img/blog/blog-post-3.jpg",
    author: "steve",
    readTime: "5 min read",
    content: DEFAULT_BLOG_ARTICLE_HTML,
    tags: ["wordpress", "design", "economy"],
  },
];

/** Page 1 shows this many posts; later pages show `BLOG_PAGE_NEXT_COUNT` each. */
export const BLOG_PAGE_FIRST_COUNT = 6;
export const BLOG_PAGE_NEXT_COUNT = 3;

export function getBlogListPage(page: number): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
} {
  const total = blogPosts.length;
  const totalPages =
    total <= BLOG_PAGE_FIRST_COUNT
      ? 1
      : 1 +
        Math.ceil((total - BLOG_PAGE_FIRST_COUNT) / BLOG_PAGE_NEXT_COUNT);

  const safe =
    Number.isFinite(page) && page >= 1 ? Math.floor(page) : 1;
  const currentPage = Math.min(safe, totalPages);

  let start: number;
  let length: number;
  if (currentPage === 1) {
    start = 0;
    length = Math.min(BLOG_PAGE_FIRST_COUNT, total);
  } else {
    start =
      BLOG_PAGE_FIRST_COUNT + (currentPage - 2) * BLOG_PAGE_NEXT_COUNT;
    length = Math.min(BLOG_PAGE_NEXT_COUNT, Math.max(0, total - start));
  }

  return {
    posts: blogPosts.slice(start, start + length),
    totalPages,
    currentPage,
  };
}
