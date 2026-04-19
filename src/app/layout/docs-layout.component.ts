import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutService } from '../services/layout.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-docs-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, SidebarComponent],
  template: `
    <div class="min-h-screen text-[var(--foreground)]">
      <app-navbar />

      <button
        *ngIf="layoutService.mobileNavOpen()"
        type="button"
        (click)="layoutService.closeMobileNav()"
        class="fixed inset-0 z-40 bg-slate-950/55 backdrop-blur-sm lg:hidden"
        aria-label="Close navigation menu"
      ></button>

      <div class="grid w-full grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:px-8 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-10 xl:px-8">
        <aside class="hidden xl:sticky xl:top-24 xl:block xl:h-[calc(100vh-7rem)]">
          <app-sidebar />
        </aside>

        <aside
          class="fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[320px] -translate-x-full p-4 transition-transform duration-300 lg:hidden"
          [class.translate-x-0]="layoutService.mobileNavOpen()"
        >
          <app-sidebar [mobile]="true" />
        </aside>

        <main class="min-w-0 xl:min-h-[calc(100vh-7rem)]">
          <router-outlet />
        </main>
      </div>
    </div>
  `
})
export class DocsLayoutComponent {
  readonly layoutService = inject(LayoutService);
}
