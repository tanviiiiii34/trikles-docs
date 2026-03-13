import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DocsService } from '../../services/docs.service';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-documentation-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, FeatureCardComponent, CodeBlockComponent],
  template: `
    @if (doc(); as page) {
      <div class="mx-auto max-w-[920px] space-y-10 pb-14 xl:max-w-none">
        @if (page.hero) {
          <app-hero-section [doc]="page" />
        } @else {
          <section id="overview" class="docs-panel px-6 py-8 sm:px-8 sm:py-10">
            <div class="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              <span class="rounded-full bg-[var(--primary-soft)] px-3 py-1">{{ page.audience }}</span>
              <span class="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">{{ page.estimatedTime }}</span>
            </div>
            <h1 class="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{{ page.title }}</h1>
            <p class="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">{{ page.description }}</p>
          </section>
        }

        @if (page.hero) {
          <section id="modules" class="space-y-6">
            <div class="px-1">
              <p class="docs-section-title">Main Modules</p>
              <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">Core workflows your team will touch first</h2>
            </div>
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              @for (feature of page.featureCards; track feature.title) {
                <app-feature-card [feature]="feature" />
              }
            </div>
          </section>
        } @else {
          <section id="features" class="space-y-6">
            <div class="px-1">
              <p class="docs-section-title">Highlights</p>
              <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">What this module helps your team do</h2>
            </div>
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              @for (feature of page.featureCards; track feature.title) {
                <app-feature-card [feature]="feature" />
              }
            </div>
          </section>
        }

        <section class="grid gap-4 lg:grid-cols-2">
          @for (feature of page.deepFeatures; track feature.title) {
            <app-feature-card [feature]="feature" />
          }
        </section>

        <section id="workflow" class="docs-panel px-6 py-8 sm:px-8 sm:py-10">
          <div>
            <p class="docs-section-title">Step by Step</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">A clean path through {{ page.title }}</h2>
          </div>
          <div class="mt-8 grid gap-4 lg:grid-cols-3">
            @for (step of page.steps; track step.title; let index = $index) {
              <article class="rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-6">
                <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-sm font-bold text-slate-950">
                  {{ index + 1 }}
                </div>
                <h3 class="mt-4 text-lg font-semibold">{{ step.title }}</h3>
                <p class="mt-2 text-sm leading-6 text-[var(--muted)]">{{ step.description }}</p>
              </article>
            }
          </div>
        </section>

        <section id="screenshots" class="space-y-6">
          <div class="px-1">
            <p class="docs-section-title">Screenshots</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">Reference views for product walkthroughs</h2>
          </div>
          <div class="grid gap-4 lg:grid-cols-2">
            @for (shot of page.screenshots; track shot.title) {
              <article class="glass-panel overflow-hidden rounded-[32px] border border-[var(--border)] p-4">
                <div class="rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(59,130,246,0.1),rgba(15,23,42,0.02))] p-4">
                  <div class="mb-4 flex items-center gap-2">
                    <span class="h-3 w-3 rounded-full bg-rose-400"></span>
                    <span class="h-3 w-3 rounded-full bg-amber-300"></span>
                    <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
                  </div>
                  <div class="rounded-[22px] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
                    <div class="flex items-center justify-between gap-3">
                      <div>
                        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">{{ shot.eyebrow }}</p>
                        <h3 class="mt-2 text-lg font-semibold">{{ shot.title }}</h3>
                      </div>
                      <div class="h-14 w-14 rounded-2xl bg-[var(--primary-soft)]"></div>
                    </div>
                    <div class="mt-6 grid gap-3">
                      <div class="h-3 w-2/3 rounded-full bg-[var(--accent)]"></div>
                      <div class="h-3 w-full rounded-full bg-[var(--accent)]"></div>
                      <div class="grid gap-3 sm:grid-cols-3">
                        <div class="h-24 rounded-2xl bg-[var(--primary-soft)]"></div>
                        <div class="h-24 rounded-2xl bg-[var(--accent)]"></div>
                        <div class="h-24 rounded-2xl bg-[var(--primary-soft)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="mt-4 text-sm leading-6 text-[var(--muted)]">{{ shot.caption }}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  @for (tag of shot.tags; track tag) {
                    <span class="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">{{ tag }}</span>
                  }
                </div>
              </article>
            }
          </div>
        </section>

        <section id="code-examples" class="space-y-6">
          <div class="px-1">
            <p class="docs-section-title">Code Examples</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">Implementation snippets you can adapt quickly</h2>
          </div>
          <div class="space-y-4">
            @for (example of page.codeExamples; track example.title) {
              <app-code-block [example]="example" />
            }
          </div>
        </section>
      </div>
    }
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
}
