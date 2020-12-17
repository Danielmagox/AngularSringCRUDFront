import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Persona } from "../Modelo/Persona";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  Url = "http://localhost:8080/AngularSpringCRUD/personas";

  constructor(private http: HttpClient) {}

  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }
}
