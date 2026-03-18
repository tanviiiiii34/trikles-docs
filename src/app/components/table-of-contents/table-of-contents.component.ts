import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { DocsService } from '../../docs/services/docs.service';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-panel rounded-[28px] border border-[var(--border)] p-5">
      <div class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">On this page</div>
      <p class="mt-2 text-sm leading-6 text-[var(--muted)]">
        Jump between sections without losing your place.
      </p>
      <nav class="mt-4 space-y-1.5">
        <a
          *ngFor="let item of docsService.activeDoc().toc; trackBy: trackItem"
          [href]="'#' + item.id"
          class="block rounded-2xl border border-transparent px-3 py-2.5 text-sm text-[var(--muted)] transition-colors duration-200 hover:border-[var(--border)] hover:bg-[var(--primary-soft)] hover:text-[var(--foreground)]"
        >
          {{ item.title }}
        </a>
      </nav>
    </div>
  `
})
export class TableOfContentsComponent {
  readonly docsService = inject(DocsService);

  trackItem(_index: number, item: { id: string }): string {
    return item.id;
  }
}
