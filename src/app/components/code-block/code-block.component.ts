import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, Input, inject, signal } from '@angular/core';

import { DocCodeExample } from '../../docs/models/docs.models';

@Component({
  selector: 'app-code-block',
  standalone: true,
  template: `
    <article class="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[#020817] shadow-[0_24px_60px_rgba(2,6,23,0.45)]">
      <div class="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="min-w-0">
          <div class="text-sm font-semibold text-white">{{ example.title }}</div>
          <p class="mt-1 text-sm text-slate-400">{{ example.description }}</p>
        </div>
        <button
          type="button"
          (click)="copy()"
          class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors duration-200 hover:bg-white/10"
        >
          {{ copied() ? 'Copied' : 'Copy' }}
        </button>
      </div>
      <div class="flex items-center justify-between border-b border-white/10 px-5 py-2 text-xs uppercase tracking-[0.18em] text-slate-500">
        <span>{{ example.language }}</span>
        <span>Trikles snippet</span>
      </div>
      <pre class="overflow-x-auto px-5 py-5 text-sm leading-7 text-slate-100"><code class="block min-w-max" [innerHTML]="highlighted()"></code></pre>
    </article>
  `
})
export class CodeBlockComponent {
  private readonly sanitizer = inject(DomSanitizer);

  @Input({ required: true }) example!: DocCodeExample;

  readonly copied = signal(false);

  highlighted(): SafeHtml {
    const escaped = this.example.code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    const withComments = escaped.replace(/(\/\/.*$|#.*$)/gm, '<span class="token-comment">$1</span>');
    const withStrings = withComments.replace(/('[^']*'|"[^"]*"|`[^`]*`)/g, '<span class="token-string">$1</span>');
    const withNumbers = withStrings.replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>');
    const withKeywords = withNumbers.replace(
      /\b(const|await|return|throw|export|async|function|if|new|map|every|fetch|curl)\b/g,
      '<span class="token-keyword">$1</span>'
    );

    const highlighted = withKeywords.replace(
      /\b(createTriklesClient|buildReminderSchedule|getDocsNavigation)\b/g,
      '<span class="token-function">$1</span>'
    );

    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }

  async copy(): Promise<void> {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(this.example.code);
    }
    this.copied.set(true);
    window.setTimeout(() => this.copied.set(false), 1600);
  }
}
