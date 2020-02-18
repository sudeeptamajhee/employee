import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';
import { FindComponent } from './components/find/find.component';
import { EditComponent } from './components/edit/edit.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'view', component: ViewComponent},
  {path: 'find', component: FindComponent},
  {path: 'edit', component: EditComponent},
  {path: 'new', component: NewComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
