import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Persona } from "../Modelo/Persona";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  Url = "/personas";

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url, persona);
  }
  getPersonaId(id: number) {
    return this.http.get<Persona>(this.Url + "/" + id);
  }
  updatePersona(persona: Persona) {
    return this.http.put<Persona>(this.Url + "/" + persona.id, persona);
  }
}
