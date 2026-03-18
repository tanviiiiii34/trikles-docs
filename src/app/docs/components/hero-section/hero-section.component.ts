import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, Input, inject } from '@angular/core';

import { DocPage } from '../../models/docs.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section
      id="hero"
      class="glass-panel relative overflow-hidden rounded-[36px] border border-[var(--border)] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16"
    >
      <div class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_72%)]"></div>

      <div class="relative mx-auto flex max-w-4xl flex-col items-center text-center">

       
        <img
  src="/logo.png"
  alt="Trikles Logo"
  class="mx-auto mb-4 h-[170px] w-[170px] object-contain -mt-12"
/>

        <h1 class="mb-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {{ doc.hero?.title }}
        </h1>

        <p class="mb-8 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          {{ doc.hero?.description }}
        </p>

        <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            [href]="doc.hero?.primaryHref"
            class="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Get Started
          </a>

          <a
            [href]="doc.hero?.secondaryHref"
            class="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
          >
            View Modules
          </a>
        </div>

      </div>

      <!-- VIDEO -->
      <div class="mt-8 flex justify-center sm:mt-10">
        <div class="relative w-full max-w-[720px] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[#020817] p-3 shadow-[0_26px_70px_rgba(2,6,23,0.4)]">

          <div class="mb-3 flex items-center gap-2 px-2">
            <span class="h-3 w-3 rounded-full bg-rose-400"></span>
            <span class="h-3 w-3 rounded-full bg-amber-300"></span>
            <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
          </div>

          <div class="aspect-video overflow-hidden rounded-[22px] border border-white/10 bg-black">
            <iframe
              class="h-full w-full"
              [src]="safeVideoUrl()"
              title="Trikles platform walkthrough"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

        </div>
      </div>

    </section>
  `
})
export class HeroSectionComponent {

  private readonly sanitizer = inject(DomSanitizer);

  @Input({ required: true }) doc!: DocPage;

  safeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.doc.videoUrl);
  }

}
