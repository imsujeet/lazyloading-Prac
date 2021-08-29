import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LazyModule } from '../lazy/lazy.module';

const route:Routes = [
  {path: '', component: ProductListComponent},
  {path: 'lazy', loadChildren: () => import('../lazy/lazy.module').then(m => m.LazyModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/