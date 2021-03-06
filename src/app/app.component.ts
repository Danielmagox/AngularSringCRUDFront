import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "a la Base de datos !";

  constructor(private router: Router) {}

  //navega a la ruta de app-routing.module.ts
  Listar() {
    this.router.navigate(["listar"]);
  }
  Nuevo() {
    this.router.navigate(["add"]);
  }
  Calculadora() {
    this.router.navigate(["calculadora"]);
  }
}
