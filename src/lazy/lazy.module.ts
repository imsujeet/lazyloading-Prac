import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { AppRouterModule } from 'src/app-router/app-router.module';

@NgModule({
  imports: [
    CommonModule,
    AppRouterModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }