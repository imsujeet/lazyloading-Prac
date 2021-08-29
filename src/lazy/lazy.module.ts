import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouterModule } from '../router/router.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouterModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }