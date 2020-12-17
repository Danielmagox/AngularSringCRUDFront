import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ListarComponent } from "./Persona/listar/listar.component";
import { EditComponent } from "./Persona/edit/edit.component";
import { AddComponent } from "./Persona/add/add.component";

const routes: Routes = [
  { path: "listar", component: ListarComponent },
  { path: "add", component: AddComponent },
  { path: "edit", component: EditComponent },
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class AppRoutingModule {}
