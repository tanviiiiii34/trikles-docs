import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly mode = signal<'dark' | 'light'>('dark');

  init(): void {
    const stored = this.document.defaultView?.localStorage.getItem('trikles-theme');
    const initial = stored === 'light' ? 'light' : 'dark';
    this.apply(initial);
  }

  toggle(): void {
    this.apply(this.mode() === 'dark' ? 'light' : 'dark');
  }

  private apply(mode: 'dark' | 'light'): void {
    const root = this.document.documentElement;
    const body = this.document.body;

    this.mode.set(mode);
    root.classList.toggle('dark', mode === 'dark');
    root.classList.toggle('light', mode === 'light');
    body.classList.toggle('dark', mode === 'dark');
    body.classList.toggle('light', mode === 'light');
    this.document.defaultView?.localStorage.setItem('trikles-theme', mode);
  }
}
