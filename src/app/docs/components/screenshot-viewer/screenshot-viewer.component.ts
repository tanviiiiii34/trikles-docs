import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screenshot-viewer',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }

    .viewer {
      display: block;
    }

    .preview-shell {
      position: relative;
      border-radius: 22px;
      border: 1px solid var(--border);
      background: var(--surface-strong);
      padding: 12px;
    }

    .screenshot-preview {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 16px;
      object-fit: contain;
      cursor: zoom-in;
      transition: transform 0.2s ease;
    }

    .screenshot-preview:hover {
      transform: scale(1.02);
    }

    .preview-overlay {
      position: absolute;
      inset: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      background: rgba(2, 6, 23, 0);
      pointer-events: none;
      transition: background 0.2s ease;
    }

    .preview-shell:hover .preview-overlay {
      background: rgba(2, 6, 23, 0.22);
    }

    .preview-label {
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(2, 6, 23, 0.7);
      padding: 8px 14px;
      color: white;
      font-size: 14px;
      font-weight: 500;
    }

    .placeholder {
      min-height: 260px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      border: 1px dashed var(--border);
      border-radius: 16px;
      text-align: center;
    }

    .image-modal {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      z-index: 9999999;
      width: 100vw;
      height: 100vh;
      max-width: none;
      max-height: none;
      margin: 0;
      padding: 24px;
      border: none;
      display: none;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .image-modal[open] {
      display: flex;
    }

    .image-modal::backdrop {
      background: rgba(0, 0, 0, 0.92);
    }

    .image-stage {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-full {
      max-width: 96vw;
      max-height: 96vh;
      object-fit: contain;
      border-radius: 16px;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
      cursor: zoom-out;
      user-select: none;
      -webkit-user-drag: none;
    }

    .left-arrow,
    .right-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 36px;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 50%;
      width: 56px;
      height: 56px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 2;
    }

    .left-arrow {
      left: 16px;
    }

    .right-arrow {
      right: 16px;
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 48px;
      height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      z-index: 2;
    }

    @media (max-width: 640px) {
      .left-arrow,
      .right-arrow {
        width: 48px;
        height: 48px;
        font-size: 30px;
      }

      .left-arrow {
        left: 10px;
      }

      .right-arrow {
        right: 10px;
      }

      .close-btn {
        top: 12px;
        right: 12px;
      }
    }
  `],
  template: `
    <div class="viewer">
      <div class="preview-shell">
        <ng-container *ngIf="previewImage; else emptyState">
          <img
            class="screenshot-preview"
            [src]="previewImage"
            [alt]="title || 'Screenshot preview'"
            (click)="open(initialIndex)"
          />
          <div class="preview-overlay">
            <div class="preview-label">Click to view full screenshot</div>
          </div>
        </ng-container>

        <ng-template #emptyState>
          <div class="placeholder">
            <div>
              <div>Screenshot Placeholder</div>
              <div>Click to open full screenshot</div>
            </div>
          </div>
        </ng-template>
      </div>
    </div>

    <dialog
      #modal
      class="image-modal"
      (click)="onBackdropClick($event)"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
      (close)="onNativeClose()"
    >
      <div *ngIf="selectedImage" class="image-stage" (click)="$event.stopPropagation()">
        <button
          *ngIf="hasMultipleImages"
          type="button"
          class="left-arrow"
          aria-label="Previous screenshot"
          (click)="previous()"
        >
          &#8249;
        </button>

        <img
          class="image-full"
          [src]="selectedImage"
          [alt]="title || 'Fullscreen screenshot'"
          (click)="close()"
        />

        <button
          *ngIf="hasMultipleImages"
          type="button"
          class="right-arrow"
          aria-label="Next screenshot"
          (click)="next()"
        >
          &#8250;
        </button>

        <button
          type="button"
          class="close-btn"
          aria-label="Close viewer"
          (click)="close()"
        >
          &#10005;
        </button>
      </div>
    </dialog>
  `
})
export class ScreenshotViewerComponent implements OnDestroy {
  @Input() images: string[] = [];
  @Input() initialIndex = 0;
  @Input() title = '';
  @Input() description = '';

  @ViewChild('modal') private readonly modalRef?: ElementRef<HTMLDialogElement>;

  currentIndex = 0;
  isOpen = false;
  private touchStartX = 0;
  private originalBodyOverflow = '';

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  get validImages(): string[] {
    return (this.images ?? []).filter((image) => typeof image === 'string' && image.trim().length > 0);
  }

  get previewImage(): string {
    if (!this.validImages.length) {
      return '';
    }

    return this.validImages[this.clampIndex(this.initialIndex)];
  }

  get selectedImage(): string | null {
    if (!this.validImages.length || !this.isOpen) {
      return null;
    }

    return this.validImages[this.clampIndex(this.currentIndex)] ?? null;
  }

  get hasMultipleImages(): boolean {
    return this.validImages.length > 1;
  }

  open(index: number): void {
    if (!this.validImages.length) {
      return;
    }

    this.currentIndex = this.clampIndex(index);
    this.isOpen = true;
    this.disableBodyScroll();

    queueMicrotask(() => {
      const modal = this.modalRef?.nativeElement;

      if (modal && !modal.open) {
        modal.showModal();
      }
    });
  }

  close(): void {
    const modal = this.modalRef?.nativeElement;

    if (modal?.open) {
      modal.close();
      return;
    }

    this.finishClose();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.modalRef?.nativeElement) {
      this.close();
    }
  }

  onNativeClose(): void {
    if (this.isOpen) {
      this.finishClose();
    }
  }

  private finishClose(): void {
    this.isOpen = false;
    this.touchStartX = 0;
    this.enableBodyScroll();
  }

  next(): void {
    if (!this.isOpen || !this.hasMultipleImages) {
      return;
    }

    this.currentIndex = (this.currentIndex + 1) % this.validImages.length;
  }

  previous(): void {
    if (!this.isOpen || !this.hasMultipleImages) {
      return;
    }

    this.currentIndex = (this.currentIndex - 1 + this.validImages.length) % this.validImages.length;
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0]?.clientX ?? 0;
  }

  onTouchEnd(event: TouchEvent): void {
    if (!this.isOpen || !this.hasMultipleImages) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? this.touchStartX;
    const deltaX = touchEndX - this.touchStartX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        this.next();
      } else {
        this.previous();
      }
    }

    this.touchStartX = 0;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.isOpen) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previous();
    }
  }

  ngOnDestroy(): void {
    if (this.modalRef?.nativeElement.open) {
      this.modalRef.nativeElement.close();
    }

    this.enableBodyScroll();
  }

  private clampIndex(index: number): number {
    if (!this.validImages.length) {
      return 0;
    }

    return Math.max(0, Math.min(index, this.validImages.length - 1));
  }

  private disableBodyScroll(): void {
    this.originalBodyOverflow = this.document.body.style.overflow;
    this.document.body.style.overflow = 'hidden';
  }

  private enableBodyScroll(): void {
    this.document.body.style.overflow = this.originalBodyOverflow;
  }
}
