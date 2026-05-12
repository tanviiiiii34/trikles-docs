import { Component, Input } from '@angular/core';

import { DocPage } from '../../models/docs.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  styles: [`
    @media (max-width: 768px) {
      .hero-shell {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
      }

      .hero-inner {
        align-items: flex-start;
        text-align: left;
      }

      .hero-logo {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 20px;
        height: 96px;
        width: 96px;
      }

      .hero-title {
        font-size: 22px;
        line-height: 1.3;
      }

      .hero-copy {
        font-size: 14px;
        line-height: 1.6;
      }

      .hero-actions {
        width: 100%;
        align-items: stretch;
      }

      .hero-video-shell {
        margin-top: 24px;
        width: 100%;
        max-width: 100%;
        border-radius: 16px;
        padding: 0;
        border: none;
        box-shadow: none;
        background: transparent;
      }

      .hero-video-frame {
        border-radius: 14px;
      }
    }
  `],
  template: `
    <section
      id="hero"
      class="hero-shell glass-panel relative overflow-hidden rounded-[36px] border border-[var(--border)] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16"
    >
      <div class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_72%)]"></div>

      <div class="hero-inner relative mx-auto flex max-w-4xl flex-col items-center text-center">

       
        <img
  src="/logo.png"
  alt="Trikles Logo"
  class="hero-logo mx-auto mb-4 h-[170px] w-[170px] object-contain -mt-12"
/>

        <h1 class="hero-title mb-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {{ doc.hero?.title }}
        </h1>

        <p class="hero-copy mb-8 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          {{ doc.hero?.description }}
        </p>

        <div class="hero-actions flex flex-col items-center justify-center gap-3 sm:flex-row">
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

    </section>
  `
})
export class HeroSectionComponent {
  @Input({ required: true }) doc!: DocPage;
}
