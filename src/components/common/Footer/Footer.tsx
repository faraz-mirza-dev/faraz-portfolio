import { FadeInMount } from "@/components/motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <FadeInMount delay={0.12}>
        <p>
          Copyright © {year}{" "}
          <a
            href="https://themeforest.net/user/ib-themes"
            target="_blank"
            rel="noreferrer"
          >
            ib-themes.
          </a>{" "}
          All Rights Reserved.
        </p>
      </FadeInMount>
    </footer>
  );
}
