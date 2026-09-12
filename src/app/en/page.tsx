import { HomePage } from "@/components/home-page";
import { howToJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd("en")) }}
      />
      <HomePage />
    </>
  );
}
