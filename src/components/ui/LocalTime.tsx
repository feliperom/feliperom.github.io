"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/content/site";

/** Live local clock for Felipe's timezone, hydration-safe (renders after mount). */
export function LocalTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: SITE.location.timezone,
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time || "--:--:--"} <span className="text-gray">GMT-3</span>
    </span>
  );
}
