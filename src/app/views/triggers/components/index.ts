import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// YOUR import COMPONENTS HERE

export const COMPONENTS = [
  // YOUR COMPONENTS HERE
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
