import { Routes } from '@angular/router';

import { DocumentationPageComponent } from './components/documentation-page/documentation-page.component';
import { docsRouteDefinitions } from './docs/docs.data';
import { DocsLayoutComponent } from './layout/docs-layout.component';

const docRoutes: Routes = docsRouteDefinitions.map((doc) => ({
  path: doc.routeSegment,
  component: DocumentationPageComponent,
  data: { docId: doc.id }
}));

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'docs/introduction'
  },
  {
    path: 'docs',
    component: DocsLayoutComponent,
    children: [
      ...docRoutes,
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'introduction'
      },
      {
        path: '**',
        redirectTo: 'introduction'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'docs/introduction'
  }
];
