import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { DocFeature } from '../../models/docs.models';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    @media (max-width: 768px) {
      .feature-card {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        transform: none !important;
      }

      .feature-card-title {
        font-size: 18px;
        line-height: 1.35;
      }

      .feature-card-copy {
        font-size: 14px;
        line-height: 1.6;
      }
    }
  `],
  template: `
    <article class="feature-card glass-panel rounded-[28px] border border-[var(--border)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]">
        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-none stroke-current stroke-[1.8]" stroke-linecap="round" stroke-linejoin="round">
          <ng-container *ngFor="let path of iconPaths(); trackBy: trackPath">
            <path [attr.d]="path"></path>
          </ng-container>
        </svg>
      </div>
      <h3 class="feature-card-title mt-4 text-lg font-semibold">{{ feature.title }}</h3>
      <p class="feature-card-copy mt-2 text-sm leading-6 text-[var(--muted)]">{{ feature.description }}</p>
    </article>
  `
})
export class FeatureCardComponent {
  @Input({ required: true }) feature!: DocFeature;

  trackPath(_index: number, path: string): string {
    return path;
  }

  iconPaths(): string[] {
    const icons: Record<string, string[]> = {
      clipboard: ['M9 5h6', 'M9 3h6a2 2 0 0 1 2 2v1H7V5a2 2 0 0 1 2-2Z', 'M8 7h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z'],
      users: ['M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M10 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M20 8a3 3 0 1 1 0 6', 'M24 21v-2a4 4 0 0 0-3-3.87'],
      'credit-card': ['M2 7h20', 'M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z', 'M6 15h4'],
      'check-circle': ['M22 11.08V12a10 10 0 1 1-5.93-9.14', 'M22 4 12 14.01l-3-3'],
      chart: ['M4 19h16', 'M7 16V8', 'M12 16V5', 'M17 16v-6'],
      sparkles: ['M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z', 'M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z'],
      school: ['M3 9l9-5 9 5-9 5-9-5Z', 'M6 10.5V16a6 6 0 0 0 12 0v-5.5', 'M21 10v6'],
      calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z'],
      layers: ['M12 2 2 7l10 5 10-5-10-5Z', 'm2 12 10 5 10-5', 'm2 17 10 5 10-5'],
      shield: ['M12 3l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z'],
      search: ['m21 21-4.35-4.35', 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z'],
      book: ['M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 0 4 23V5.5Z', 'M8 7h8'],
      image: ['M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z', 'm8 13 2.5-3 3 4 2-2 3.5 5', 'M9 9h.01'],
      library: ['M4 19h16', 'M6 17V5', 'M10 17V7', 'M14 17V4', 'M18 17V8']
    };

    return icons[this.feature.icon] ?? icons['sparkles'];
  }
}
