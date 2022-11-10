import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastListComponent } from './componentes/gast-list/gast-list.component';

const routes: Routes = [
  {path: '', component: GastListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
