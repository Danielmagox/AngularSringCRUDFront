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
import { CalculadoraComponent } from "./Persona/calculadora/calculadora.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditComponent,
    AddComponent,
    CalculadoraComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
