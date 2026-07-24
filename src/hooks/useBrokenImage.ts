"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Detects a failed image even when the error happened before hydration —
 * a server-rendered <img> can finish loading (and fail) before React attaches
 * its onError handler, so the mount check below is what catches it.
 */
export function useBrokenImage() {
  const ref = useRef<HTMLImageElement>(null);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const image = ref.current;
    if (image && image.complete && image.naturalWidth === 0) setBroken(true);
  }, []);

  const onError = useCallback(() => setBroken(true), []);

  return { ref, broken, onError };
}
