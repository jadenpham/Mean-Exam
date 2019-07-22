import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { PetsComponent } from './pets/pets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: "", component: PetsComponent},
  {path: "pets/new", component: NewComponent},
  {path: "pets/:id", component: DetailsComponent},
  {path: "pets/edit/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
