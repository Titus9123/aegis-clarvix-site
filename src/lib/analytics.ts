/**
 * GA4 + Meta Pixel wiring for a static export (no server, so this is all
 * client-side — both IDs are public identifiers, safe to hardcode; there is
 * no secret to protect by routing them through env vars).
 *
 * TODO(albert): replace both placeholders once created:
 *   - GA4_MEASUREMENT_ID: analytics.google.com → Admin → Data Streams → your
 *     web stream → Measurement ID (format "G-XXXXXXXXXX").
 *   - META_PIXEL_ID: business.facebook.com → Events Manager → Connect data
 *     sources → Web → Meta Pixel → the numeric ID (15-16 digits).
 * Until both are set, GaMetaScripts renders nothing and the track*() calls
 * below are silent no-ops — safe to ship without them.
 */
export const GA4_MEASUREMENT_ID = "";
export const META_PIXEL_ID = "";

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
