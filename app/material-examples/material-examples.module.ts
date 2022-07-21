import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { MaterialExamplesRoutingModule } from './material-examples-routing.module';

import { MaterialExampleTypographyComponent } from './material-example-typography/material-example-typography.component';

export const MATERIAL_EXAMPLES = [
  MaterialExampleTypographyComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MaterialExamplesRoutingModule
  ],
  declarations: [
    MATERIAL_EXAMPLES
  ],
  exports: [
    MATERIAL_EXAMPLES
  ]
})
export class MaterialExamplesModule { }
