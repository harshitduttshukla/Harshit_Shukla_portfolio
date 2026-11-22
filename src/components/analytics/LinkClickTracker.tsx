"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

/** Name of the page area a link sits in, e.g. "navbar", "hero", "footer". */
function locationOf(el: Element): string {
  if (el.closest("nav")) return "navbar";
  if (el.closest("footer")) return "footer";
  if (el.closest(".mobile-menu")) return "mobile_menu";
  const section = el.closest("section");
  return section?.id || section?.className.split(" ")[0] || "page";
}

/**
 * One delegated listener that reports WhatsApp, email and phone link clicks to GA4,
 * so server-rendered sections don't need to become client components.
 */
export function LinkClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        sendGAEvent("event", "whatsapp_click", { location: locationOf(link) });
      } else if (href.startsWith("mailto:")) {
        sendGAEvent("event", "email_click", {});
      } else if (href.startsWith("tel:")) {
        sendGAEvent("event", "phone_click", {});
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
