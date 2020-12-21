import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Persona } from "../Modelo/Persona";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PersonaService {
  Url = "/personas";

  constructor(private http: HttpClient) {}
  //devuelve un array de objetos con el ID, el nombre y los apellidos de cada objeto en la bbdd
  //como es el primer GET que le llega al server los lista ya que no tiene argumentos
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Url);
  }
  //Llama al servidor con el objeto a crear.
  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url, persona);
  }
  //Devuelve solo 1 persona
  getPersonaId(id: string) {
    return this.http.get<Persona>(this.Url + "/" + id);
  }
  //Devuelve la suma de los sueldos
  getPersonaSumaSueldos() {
    return this.http.get<number>(this.Url + "/" + "sueldos-suma");
  }
  //Modifica el objeto que se le pase en la ruta con el ID establecido por el componente
  updatePersona(persona: Persona) {
    return this.http.put<Persona>(this.Url + "/" + persona.id, persona);
  }
  //Borra un usuario de la bbdd
  deletePersona(persona: Persona) {
    return this.http.delete<Persona>(this.Url + "/" + persona.id);
  }
}
