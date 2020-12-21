import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Persona } from "src/app/Modelo/Persona";
import { PersonaService } from "src/app/Service/service.service";

@Component({
  selector: "app-calculadora",
  templateUrl: "./calculadora.component.html",
  styleUrls: ["./calculadora.component.css"],
})
export class CalculadoraComponent implements OnInit {
  sum: number;
  clicked: boolean;

  constructor(
    private router: Router,
    private service: PersonaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.service.getPersonaSumaSueldos().subscribe((data) => {
      this.sum = data;
    });
  }

  suma() {
    this.clicked = !this.clicked;
    return this.sum;
  }
}
