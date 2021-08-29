import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LazyComponent } from 'src/lazy/lazy.component';

const childRoute: Routes = [
  {path: '', component: LazyComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childRoute)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }