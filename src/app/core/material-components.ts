import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule],
  exports: [MdButtonModule, MdCheckboxModule],
})
export class MaterialComponents { }
