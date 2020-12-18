import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Persona } from "src/app/Modelo/Persona";
import { ServiceService } from "src/app/Service/service.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private router: Router,
    private service: ServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [""],
      apellidos: [""],
    });
  }

  Guardar() {
    const persona = { ...this.myForm.value };
    console.log(persona + "GUARDAR");
    this.service.createPersona(persona).subscribe((data) => {
      alert("Agregado");
      this.router.navigate(["listar"]);
    });
  }
}
