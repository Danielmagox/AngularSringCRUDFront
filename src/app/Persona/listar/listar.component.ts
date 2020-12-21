import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Persona } from "src/app/Modelo/Persona";
import { PersonaService } from "../../Service/service.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  personas: Persona[];
  constructor(private service: PersonaService, private router: Router) {}

  ngOnInit() {
    this.service.getPersonas().subscribe((data) => {
      this.personas = data;
    });
  }
  Editar(persona: Persona): void {
    this.router.navigate(["edit/", persona.id]);
  }

  Delete(persona: Persona) {
    this.service.deletePersona(persona).subscribe((data) => {
      this.personas = this.personas.filter((p) => p !== persona);
      alert("Usuario eliminado...");
    });
  }
}
