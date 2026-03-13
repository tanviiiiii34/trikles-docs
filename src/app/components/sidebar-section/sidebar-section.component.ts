import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SidebarSection } from '../../docs/docs.models';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <section class="mb-2 rounded-3xl border border-white/5 bg-[color:color-mix(in_srgb,var(--surface)_92%,transparent)] px-2 py-2">
      <button
        type="button"
        (click)="open.update((value) => !value)"
        class="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-sm font-semibold transition-colors duration-200 hover:bg-[var(--primary-soft)]"
      >
        <span>{{ section.title }}</span>
        <span
          class="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-transform duration-200"
          [class.rotate-180]="open()"
        >
          v
        </span>
      </button>

      @if (open()) {
        <nav class="mt-2 space-y-1 border-l border-[var(--border)] pb-1 pl-3">
          @for (item of section.items; track item.route) {
            <a
              [routerLink]="item.route"
              (click)="onNavigate()"
              routerLinkActive="bg-[var(--primary-soft)] text-[var(--foreground)] shadow-[inset_0_0_0_1px_rgba(125,211,252,0.15)]"
              [routerLinkActiveOptions]="{ exact: true }"
              class="group relative block rounded-2xl px-3 py-2.5 text-sm text-[var(--muted)] transition-all duration-200 hover:translate-x-1 hover:bg-[var(--primary-soft)] hover:text-[var(--foreground)]"
            >
              <span class="absolute -left-[1.05rem] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] transition-colors duration-200 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]"></span>
              {{ item.label }}
            </a>
          }
        </nav>
      }
    </section>
  `
})
export class SidebarSectionComponent implements OnInit {
  @Input({ required: true }) section!: SidebarSection;
  @Input() mobile = false;

  readonly open = signal(true);
  private readonly layoutService = inject(LayoutService);

  ngOnInit(): void {
    this.open.set(this.section.defaultOpen ?? true);
  }

  onNavigate(): void {
    if (this.mobile) {
      this.layoutService.closeMobileNav();
    }
  }
}
