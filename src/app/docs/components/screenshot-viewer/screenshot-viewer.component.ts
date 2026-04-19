import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screenshot-viewer',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .viewer {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      overflow: hidden;
    }

    .preview-shell {
      width: min(100%, 1040px);
      max-width: 92%;
      border-radius: 28px;
      border: 1px solid var(--border);
      background: linear-gradient(180deg, var(--surface-strong), var(--surface));
      padding: 18px;
      box-shadow: var(--card-shadow);
      overflow: hidden;
    }

    .screenshot-preview {
      width: 100%;
      max-width: 100%;
      height: auto;
      display: block;
      border-radius: 20px;
      object-fit: contain;
      box-shadow: 0 18px 44px rgba(15, 23, 42, 0.12);
      background: var(--surface-strong);
    }

    .placeholder {
      min-height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 28px;
      border: 1px dashed var(--border);
      border-radius: 18px;
      text-align: center;
      color: var(--muted);
      background: var(--surface);
    }

    :host-context(.dark) .preview-shell {
      background: linear-gradient(180deg, rgba(14, 29, 49, 0.96), rgba(8, 18, 33, 0.94));
      box-shadow: 0 28px 72px rgba(2, 6, 23, 0.45);
    }

    :host-context(.dark) .screenshot-preview {
      box-shadow: 0 18px 44px rgba(2, 6, 23, 0.35);
    }

    @media (max-width: 768px) {
      .viewer {
        width: 100%;
        max-width: none;
      }

      .preview-shell {
        width: 100%;
        max-width: none;
        margin-left: 0;
        margin-top: 12px;
        margin-bottom: 16px;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 12px;
        border: none;
        background: transparent;
        box-shadow: none;
        overflow: hidden;
      }

      .screenshot-preview {
        width: 100%;
        max-width: 100%;
        margin-left: 0;
        border-radius: 12px;
        box-shadow: 0 14px 34px rgba(15, 23, 42, 0.16);
      }

      :host-context(.dark) .screenshot-preview {
        box-shadow: 0 16px 36px rgba(2, 6, 23, 0.5);
      }
    }
  `],
  template: `
    <div class="viewer">
      <div class="preview-shell">
        <ng-container *ngIf="selectedImage; else emptyState">
          <img
            class="screenshot-preview"
            [src]="selectedImage"
            [alt]="title || description || 'Documentation screenshot'"
          />
        </ng-container>

        <ng-template #emptyState>
          <div class="placeholder">
            <div>
              <div class="text-base font-semibold">Screenshot unavailable</div>
              <div class="mt-2 text-sm">Add a valid image to this walkthrough step to show it inline.</div>
            </div>
          </div>
        </ng-template>
      </div>
    </div>
  `
})
export class ScreenshotViewerComponent {
  @Input() images: string[] = [];
  @Input() initialIndex = 0;
  @Input() title = '';
  @Input() description = '';

  get selectedImage(): string {
    const validImages = (this.images ?? []).filter((image) => typeof image === 'string' && image.trim().length > 0);

    if (!validImages.length) {
      return '';
    }

    const index = Math.max(0, Math.min(this.initialIndex, validImages.length - 1));
    return validImages[index] ?? '';
  }
}
