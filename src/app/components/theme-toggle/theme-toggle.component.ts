import { Component, inject } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      type="button"
      (click)="themeService.toggle()"
      class="group inline-flex h-7 w-[54px] items-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-1 shadow-panel transition duration-200 hover:border-[var(--primary)]"
      aria-label="Toggle theme"
      [attr.aria-pressed]="themeService.mode() === 'dark'"
    >
      <span class="relative flex h-5 w-full items-center justify-between px-[2px] text-[11px] leading-none">
        <span
          class="z-10 transition-opacity duration-200"
          [class.opacity-100]="themeService.mode() === 'dark'"
          [class.opacity-40]="themeService.mode() !== 'dark'"
        >
          🌙
        </span>
        <span
          class="z-10 transition-opacity duration-200"
          [class.opacity-100]="themeService.mode() === 'light'"
          [class.opacity-40]="themeService.mode() !== 'light'"
        >
          ☀️
        </span>
        <span
          class="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[var(--primary)] shadow-[0_4px_12px_rgba(15,23,42,0.28)] transition-transform duration-300 ease-out"
          [class.translate-x-0]="themeService.mode() === 'dark'"
          [class.translate-x-[28px]]="themeService.mode() === 'light'"
        ></span>
      </span>
    </button>
  `
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);
}
