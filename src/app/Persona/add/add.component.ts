import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Persona } from "src/app/Modelo/Persona";
import { PersonaService } from "src/app/Service/service.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private router: Router,
    private service: PersonaService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  Guardar() {
    const persona = { ...this.myForm.value };
    this.service.createPersona(persona).subscribe((data) => {
      alert("Agregado");
      this.router.navigate(["listar"]);
    });
  }
  buildForm() {
    this.myForm = this.fb.group({
      name: [""],
      apellidos: [""],
    });
  }
}
