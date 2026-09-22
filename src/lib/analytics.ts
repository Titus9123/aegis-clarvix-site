/**
 * GA4 + Meta Pixel wiring for a static export (no server, so this is all
 * client-side — both IDs are public identifiers, safe to hardcode; there is
 * no secret to protect by routing them through env vars).
 *
 * GA4 property "Aegis by Clarvix" and Meta Pixel "Aegis Website" created
 * 2026-09-22, both scoped to aegis.clarvix.net specifically (not the shared
 * clarvix.net GA4 property, to keep Aegis traffic unmixed).
 */
export const GA4_MEASUREMENT_ID = "G-RK7DMT428Y";
export const META_PIXEL_ID = "2901792140191163";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fired on the WhatsApp CTA — the primary conversion action on this site. */
export function trackWhatsAppClick() {
  window.gtag?.("event", "generate_lead", { method: "whatsapp" });
  window.fbq?.("track", "Contact", { content_name: "whatsapp" });
}

/** Fired on the "send an email" CTA — the secondary conversion action. */
export function trackEmailClick() {
  window.gtag?.("event", "generate_lead", { method: "email" });
  window.fbq?.("track", "Contact", { content_name: "email" });
}
