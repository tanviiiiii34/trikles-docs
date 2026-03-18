import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DocScreenshot } from '../../models/docs.models';
import { DocsService } from '../../services/docs.service';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ScreenshotViewerComponent } from '../screenshot-viewer/screenshot-viewer.component';

@Component({
  selector: 'app-documentation-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FeatureCardComponent,
    ScreenshotViewerComponent
  ],
  template: `
    <ng-container *ngIf="doc() as page">
      <div class="mx-auto max-w-[1120px] space-y-10 pb-14 xl:max-w-none">
        <app-hero-section *ngIf="page.hero; else overviewSection" [doc]="page"></app-hero-section>

        <ng-template #overviewSection>
          <section id="overview" class="docs-panel rounded-[36px] px-6 py-8 sm:px-8 sm:py-10">
            <div class="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              <span class="rounded-full bg-[var(--primary-soft)] px-3 py-1">{{ page.audience }}</span>
              <span class="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">{{ page.estimatedTime }}</span>
            </div>
            <h1 class="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{{ page.title }}</h1>
            <p class="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">{{ page.description }}</p>
          </section>
        </ng-template>

        <section id="features" class="space-y-6">
          <div class="px-1">
            <p class="docs-section-title">Highlights</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">What this module helps your team do</h2>
          </div>

          <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <app-feature-card
              *ngFor="let feature of page.featureCards; trackBy: trackFeature"
              [feature]="feature"
            ></app-feature-card>
          </div>
        </section>

        <section *ngIf="page.deepFeatures.length" class="grid gap-4 lg:grid-cols-2">
          <app-feature-card
            *ngFor="let feature of page.deepFeatures; trackBy: trackFeature"
            [feature]="feature"
          ></app-feature-card>
        </section>

        <section id="workflow" class="docs-panel rounded-[36px] px-6 py-8 sm:px-8 sm:py-10">
          <div>
            <p class="docs-section-title">Step by Step</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">
              {{ page.workflowHeading ?? 'A clean path through ' + page.title }}
            </h2>
          </div>

          <div class="mt-8 grid gap-4 lg:grid-cols-2">
            <article
              *ngFor="let step of page.steps; let index = index; trackBy: trackStep"
              class="rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-sm font-bold text-slate-950">
                {{ index + 1 }}
              </div>
              <h3 class="mt-4 text-lg font-semibold">{{ step.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-[var(--muted)]">{{ step.description }}</p>
            </article>
          </div>
        </section>

        <section id="screenshots" class="space-y-6">
          <div class="px-1">
            <p class="docs-section-title">Screenshots</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">
              {{ page.screenshotsHeading ?? 'Reference views for product walkthroughs' }}
            </h2>
            <p *ngIf="page.screenshotsDescription" class="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">
              {{ page.screenshotsDescription }}
            </p>
          </div>

          <div class="grid gap-6 xl:grid-cols-2">
            <article
              *ngFor="let shot of page.screenshots; let index = index; trackBy: trackScreenshot"
              class="glass-panel rounded-[32px] border border-[var(--border)] p-5"
            >
              <div class="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">{{ shot.eyebrow }}</p>
                  <h3 class="mt-2 text-xl font-semibold">{{ shot.title }}</h3>
                </div>
                <span class="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--muted)]">
                  {{ index + 1 }}/{{ page.screenshots.length }}
                </span>
              </div>

              <app-screenshot-viewer
                [images]="pageScreenshotImages(page.screenshots)"
                [initialIndex]="index"
                [title]="shot.title"
                [description]="shot.caption"
              ></app-screenshot-viewer>

              <div *ngIf="shot.tags.length" class="mt-4 flex flex-wrap gap-2">
                <span
                  *ngFor="let tag of shot.tags; trackBy: trackTag"
                  class="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {{ tag }}
                </span>
              </div>
            </article>
          </div>
        </section>
      </div>
    </ng-container>
  `
})
export class DocumentationPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly docsService = inject(DocsService);

  readonly doc = computed(() => this.docsService.activeDoc());

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.docsService.setActiveDoc(data['docId'] as string);
    });
  }

  pageScreenshotImages(screenshots: DocScreenshot[]): string[] {
    return screenshots.map((shot) => shot.imageUrl);
  }

  trackFeature(_index: number, feature: { title: string }): string {
    return feature.title;
  }

  trackStep(_index: number, step: { title: string }): string {
    return step.title;
  }

  trackScreenshot(_index: number, shot: DocScreenshot): string {
    return shot.title;
  }

  trackTag(_index: number, tag: string): string {
    return tag;
  }
}
