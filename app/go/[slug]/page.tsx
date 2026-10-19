import type { Metadata } from "next";
import { notFound } from "next/navigation";

// The App Store deep link for an in-app event points at /go/<slug>. On an
// iPhone with the app installed, iOS intercepts it and never loads this page.
// This is what everyone else sees: a desktop browser, an Android phone, or an
// iPhone without the app yet.
const DESTINATIONS = {
  paywall: {
    title: "Go Premium",
    blurb:
      "Unlock every server, remove the ads and drop the time limit. Open this link on your iPhone or iPad with Sahara VPN installed and it takes you straight there.",
  },
  halloween: {
    title: "Halloween offer",
    blurb:
      "Do not let hackers scare you. Open this link on your iPhone or iPad with Sahara VPN installed and it takes you straight to the offer.",
  },
} as const;

type Slug = keyof typeof DESTINATIONS;

const APP_STORE_URL = "https://apps.apple.com/app/id6478803973";

export function generateStaticParams() {
  return Object.keys(DESTINATIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = DESTINATIONS[slug as Slug];
  if (!destination) return {};
  return {
    title: `${destination.title} - Sahara VPN`,
    description: destination.blurb,
    alternates: { canonical: `/go/${slug}` },
    // This page exists to hand people off, not to be found in search.
    robots: { index: false, follow: false },
  };
}

export default async function GoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = DESTINATIONS[slug as Slug];
  if (!destination) notFound();

  return (
    <div className="bg-sand-light min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
            {destination.title}
          </h1>
          <p className="text-lg text-slate-dark/70 mb-8">{destination.blurb}</p>

          <a
            href={APP_STORE_URL}
            className="inline-block rounded-full bg-app-green px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            Get Sahara VPN
          </a>

          <p className="mt-8 text-sm text-slate-dark/60">
            Already have the app? Open this page on your iPhone or iPad and it
            will open in Sahara VPN automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
