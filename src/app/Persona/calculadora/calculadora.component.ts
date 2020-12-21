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
  med: number;
  des: number;
  clicked: boolean;
  clicked2: boolean;
  clicked3: boolean;

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
    this.service.getPersonaMediaSueldos().subscribe((data) => {
      this.med = data;
    });
    this.service.getDesviacionTipica().subscribe((data) => {
      this.des = data;
    });
  }

  suma() {
    this.clicked = !this.clicked;
    return this.sum;
  }

  media() {
    this.clicked2 = !this.clicked2;
    return this.med;
  }

  desviacion() {
    this.clicked3 = !this.clicked3;
    return this.des;
  }
}