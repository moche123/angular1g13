import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { AnyComponent } from './components/any/any.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: ':any',
    component: AnyComponent
  },
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
