import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MaterialExampleTypographyComponent } from './material-example-typography/material-example-typography.component';

const MATERIAL_EXAMPLES_ROUTES: Route[] = [
  { path: 'typography', component: MaterialExampleTypographyComponent }
];

export const MaterialExamplesRoutingModule: ModuleWithProviders = RouterModule.forRoot(MATERIAL_EXAMPLES_ROUTES);