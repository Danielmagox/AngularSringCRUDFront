import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Persona } from "src/app/Modelo/Persona";
import { PersonaService } from "src/app/Service/service.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  persona: Persona = new Persona();
  myForm: FormGroup;

  constructor(
    private router: Router,
    private service: PersonaService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.getPersonaId(id).subscribe((data) => {
      this.persona = data;
      //construimos el formulario con la info necesaria.
      this.buildForm();
    });
  }

  Actualizar() {
    //Automáticamente copia los atributos con los ...
    const persona = { ...this.persona, ...this.myForm.value };
    this.service.updatePersona(persona).subscribe((data) => {
      this.persona = data;
      alert("Se Actualizo con Exito... !!!");
      this.router.navigate(["listar"]);
    });
  }

  buildForm() {
    this.myForm = this.fb.group({
      name: [this.persona.name],
      apellidos: [this.persona.apellidos],
    });
  }
}
