import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListarComponent } from "./Persona/listar/listar.component";
import { EditComponent } from "./Persona/edit/edit.component";
import { AppRoutingModule } from ".//app-routing.module";
import { AddComponent } from "./Persona/add/add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonaService } from "../app/Service/service.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ListarComponent, EditComponent, AddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
