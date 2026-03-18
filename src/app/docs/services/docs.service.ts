import { Injectable, computed, signal } from '@angular/core';

import { docsById, docsRouteDefinitions, sidebarSections } from '../config/docs.config';
import { DocPage, SidebarSection } from '../models/docs.models';

@Injectable({ providedIn: 'root' })
export class DocsService {
  private readonly activeDocId = signal<string>('introduction');

  readonly docs = docsRouteDefinitions;
  readonly sidebarSections: SidebarSection[] = sidebarSections;
  readonly activeDoc = computed<DocPage>(() => docsById[this.activeDocId()]);

  setActiveDoc(docId: string): void {
    if (docsById[docId]) {
      this.activeDocId.set(docId);
    }
  }

  search(query: string): DocPage[] {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return [];
    }

    return this.docs.filter((doc) => {
      const haystack = [
        doc.title,
        doc.summary,
        doc.description,
        ...doc.featureCards.map((feature) => feature.title)
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalized);
    });
  }
}
