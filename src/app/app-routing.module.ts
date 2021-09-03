import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { EditarComponent } from './components/editar/editar.component';


const routes: Routes = [

  {path:'', component:CardComponent},
  {path:'curriculum', component:CurriculumComponent},
  {path:'editar', component:EditarComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
