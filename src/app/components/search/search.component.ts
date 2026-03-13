import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DocsService } from '../../services/docs.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="relative mx-auto w-full max-w-2xl">
      <label class="relative block">
        <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
          Search docs
        </span>
        <input
          type="search"
          [value]="query()"
          (input)="onInput($event)"
          placeholder="Search docs"
          class="glass-panel h-12 w-full rounded-full border border-[var(--border)] pl-28 pr-16 text-sm outline-none transition duration-200 placeholder:text-transparent focus:border-[var(--primary)]"
        >
        <span class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] px-2 py-1 text-[11px] text-[var(--muted)]">
          Ctrl K
        </span>
      </label>

      @if (results().length) {
        <div class="surface-panel absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-[var(--border)]">
          @for (result of results(); track result.id) {
            <a
              [routerLink]="'/docs/' + result.routeSegment"
              (click)="clear()"
              class="flex items-start justify-between gap-4 border-b border-[var(--border)] px-4 py-4 transition-colors duration-200 hover:bg-[var(--primary-soft)] last:border-b-0"
            >
              <div>
                <div class="text-sm font-semibold">{{ result.title }}</div>
                <p class="mt-1 text-sm text-[var(--muted)]">{{ result.summary }}</p>
              </div>
              <span class="rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs text-[var(--muted)]">
                {{ result.routeSegment }}
              </span>
            </a>
          }
        </div>
      }
    </div>
  `
})
export class SearchComponent {
  private readonly docsService = inject(DocsService);

  readonly query = signal('');
  readonly results = computed(() => this.docsService.search(this.query()).slice(0, 6));

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query.set(target.value);
  }

  clear(): void {
    this.query.set('');
  }
}
