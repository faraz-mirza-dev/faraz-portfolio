import { useEffect } from "react";

// Revealator animations (from original fm.revealator.jquery.min.js)
export const useRevealator = (): void => {
  useEffect(() => {
    // Fix revealator issue after page loaded
    const revealatorElements = document.querySelectorAll(".revealator-delay1");
    revealatorElements.forEach((element) => {
      element.classList.add("no-transform");
    });
  }, []);
};

// Portfolio Gallery initialization
export const usePortfolioGallery = (): void => {
  useEffect(() => {
    // Initialize CBPGridGallery if grid exists
    const gridElement = document.getElementById("grid-gallery");
    if (gridElement) {
      // This would need to be implemented with a React-compatible gallery library
      // For now, just mark that initialization would happen here
      console.log("Portfolio gallery would be initialized here");
    }
  }, []);
};

// Direction aware hover effect
export const useDirectionHover = (): void => {
  useEffect(() => {
    // Initialize direction aware hover for portfolio items
    const portfolioItems = document.querySelectorAll(".grid li figure");
    portfolioItems.forEach(() => {
      // This would need to be implemented with a React-compatible hover library
      // For now, just mark that initialization would happen here
      console.log("Direction hover would be initialized here");
    });
  }, []);
};

// Video control functions
export const useVideoControl = (): { stopVideos: () => void } => {
  const stopVideos = (): void => {
    const video = document.getElementById("video") as HTMLVideoElement;
    if (video && video.paused !== true && video.ended !== true) {
      video.pause();
    }

    const youtubeVideos = document.querySelectorAll(
      ".youtube-video",
    ) as NodeListOf<HTMLIFrameElement>;
    youtubeVideos.forEach((video) => {
      video.contentWindow?.postMessage(
        '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
        "*",
      );
    });
  };

  useEffect(() => {
    // Add keyboard navigation
    const handleKeyup = (e: KeyboardEvent): void => {
      if (e.keyCode === 27) {
        stopVideos();
        const closeContent = document.querySelector(
          ".close-content",
        ) as HTMLElement;
        closeContent?.click();
        const navbar = document.getElementById("navbar-collapse-toggle");
        navbar?.classList.remove("hide-header");
      }
      if (e.keyCode === 37 || e.keyCode === 39) {
        stopVideos();
      }
    };

    document.addEventListener("keyup", handleKeyup);
    return () => document.removeEventListener("keyup", handleKeyup);
  }, []);

  return { stopVideos };
};

// Note: The original project does not use Typed.js, AOS, or GSAP
// It uses jQuery and revealator for animations
// The following functions are placeholders for those libraries if needed later

export const useTyped = (selector: string, strings: string[]): void => {
  useEffect(() => {
    // Original project does not use Typed.js
    // This would be implemented if Typed.js is added later
    console.log("Typed.js would be initialized here for:", selector, strings);
  }, [selector, strings]);
};

export const useAOS = (): void => {
  useEffect(() => {
    // Original project does not use AOS
    // This would be implemented if AOS is added later
    console.log("AOS would be initialized here");
  }, []);
};

export const useGSAP = (): void => {
  useEffect(() => {
    // Original project does not use GSAP
    // This would be implemented if GSAP is added later
    console.log("GSAP would be initialized here");
  }, []);
};
