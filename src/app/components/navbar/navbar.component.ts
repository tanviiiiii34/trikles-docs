import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LayoutService } from '../../services/layout.service';
import { SearchComponent } from '../search/search.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SearchComponent, ThemeToggleComponent],
  template: `
    <header
      class="sticky top-0 z-50 border-b border-[var(--border)] backdrop-blur-xl"
      style="background: color-mix(in srgb, var(--background) 76%, transparent);"
    >
      <div class="mx-auto max-w-layout px-4 py-3 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">

          <!-- Mobile menu button -->
          <button
            type="button"
            (click)="layoutService.toggleMobileNav()"
            class="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--foreground)] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <span class="space-y-1.5">
              <span class="block h-0.5 w-5 rounded-full bg-current"></span>
              <span class="block h-0.5 w-5 rounded-full bg-current"></span>
              <span class="block h-0.5 w-5 rounded-full bg-current"></span>
            </span>
          </button>

          <!-- LOGO -->
          <a
            routerLink="/docs/introduction"
            class="flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-2"
          >
            <img src="/logo.png" alt="Trikles Logo" class="h-12 w-12 object-contain">
          </a>

          <!-- Search -->
          <div class="hidden min-w-0 flex-1 md:block">
            <app-search></app-search>
          </div>

          <!-- Theme Toggle -->
          <div class="ml-auto flex shrink-0 items-center justify-center pl-2">
            <app-theme-toggle></app-theme-toggle>
          </div>

        </div>

        <!-- Mobile Search -->
        <div class="mt-3 md:hidden">
          <app-search></app-search>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  readonly layoutService = inject(LayoutService);
}