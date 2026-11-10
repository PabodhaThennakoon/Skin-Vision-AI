import React from 'react';
import { MapPinIcon } from 'lucide-react';

export function ProfessionalCareCard() {
  return (
    <aside
      aria-labelledby="professional-care-heading"
      className="shrink-0 rounded-[20px] border border-coral-200 bg-white p-6 lg:w-[280px]">
      <h3
        id="professional-care-heading"
        className="text-[16px] font-bold tracking-[-0.02em] text-ink-900">
        Talk to a professional
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">
        An in-person examination is the only way to confirm what a skin change actually is.
      </p>
      <a
        href="https://www.google.com/maps/search/?api=1&query=dermatologist+near+me"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find a Dermatologist nearby on Google Maps (opens in a new tab)"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-ink-800 bg-ink-800 px-3 py-3 text-center text-[15px] font-semibold tracking-[-0.01em] text-canvas shadow-card transition-colors hover:bg-ink-900 active:bg-ink-900">
        <MapPinIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        Find a Dermatologist
      </a>
    </aside>
  );
}
