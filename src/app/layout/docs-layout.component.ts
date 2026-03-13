import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutService } from '../services/layout.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TableOfContentsComponent } from '../components/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-docs-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, SidebarComponent, TableOfContentsComponent],
  template: `
    <div class="min-h-screen text-[var(--foreground)]">
      <app-navbar />

      @if (layoutService.mobileNavOpen()) {
        <button
          type="button"
          (click)="layoutService.closeMobileNav()"
          class="fixed inset-0 z-40 bg-slate-950/55 backdrop-blur-sm lg:hidden"
          aria-label="Close navigation menu"
        ></button>
      }

      <div class="mx-auto grid w-full max-w-layout grid-cols-1 gap-6 px-4 py-6 sm:px-6 xl:grid-cols-[260px_minmax(0,1fr)_220px] xl:gap-8 xl:px-8">
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

        <aside class="hidden xl:sticky xl:top-24 xl:block xl:h-[calc(100vh-7rem)]">
          <app-table-of-contents />
        </aside>
      </div>
    </div>
  `
})
export class DocsLayoutComponent {
  readonly layoutService = inject(LayoutService);
}
