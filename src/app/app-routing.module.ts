import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ListarComponent } from "./Persona/listar/listar.component";
import { EditComponent } from "./Persona/edit/edit.component";
import { AddComponent } from "./Persona/add/add.component";
import { CalculadoraComponent } from "./Persona/calculadora/calculadora.component";

const routes: Routes = [
  { path: "listar", component: ListarComponent },
  { path: "add", component: AddComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "calculadora", component: CalculadoraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
