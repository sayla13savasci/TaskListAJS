import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';


// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
  },
  {
    path: 'projects',
    component : ProjectsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
