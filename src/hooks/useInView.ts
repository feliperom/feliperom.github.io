"use client";

/**
 * Fires the callback once when the element first enters the viewport.
 * Uses IntersectionObserver so it never depends on the scroll driver (Lenis),
 * which keeps reveals reliable for both above- and below-the-fold content.
 */
export function observeOnce(
  element: Element,
  onEnter: () => void,
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
): () => void {
  if (typeof IntersectionObserver === "undefined") {
    onEnter();
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        onEnter();
        observer.disconnect();
        break;
      }
    }
  }, options);

  observer.observe(element);
  return () => observer.disconnect();
}
