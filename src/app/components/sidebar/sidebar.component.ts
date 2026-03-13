import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { DocsService } from '../../services/docs.service';
import { LayoutService } from '../../services/layout.service';
import { SidebarSectionComponent } from '../sidebar-section/sidebar-section.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarSectionComponent],
  template: `
    <div class="glass-panel h-full overflow-hidden rounded-[28px] border border-[var(--border)]">
      <div class="border-b border-[var(--border)] px-5 py-4">
        <div class="flex items-center justify-between gap-4">
          <div>
            <div class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Navigation</div>
            <p class="mt-2 text-sm text-[var(--muted)]">
              Browse modules, walkthroughs, and reusable implementation guides.
            </p>
          </div>

          @if (mobile) {
            <button
              type="button"
              (click)="layoutService.closeMobileNav()"
              class="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--muted)]"
              aria-label="Close navigation"
            >
              X
            </button>
          }
        </div>
      </div>

      <div class="max-h-[calc(100vh-12rem)] overflow-y-auto px-3 py-3">
        @for (section of docsService.sidebarSections; track section.title) {
          <app-sidebar-section [section]="section" [mobile]="mobile" />
        }
      </div>
    </div>
  `
})
export class SidebarComponent {
  @Input() mobile = false;

  readonly docsService = inject(DocsService);
  readonly layoutService = inject(LayoutService);
}
