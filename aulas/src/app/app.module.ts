import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { HomeComponent } from './home/home.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { Exp2Component } from './exp2/exp2.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { FilhoInputComponent } from './exp2/filho-input/filho-input.component';
import { PaiInputComponent } from './exp2/pai-input/pai-input.component';
import { FilhoOutputComponent } from './exp2/filho-output/filho-output.component';
import { PaiOutputComponent } from './exp2/pai-output/pai-output.component';
import { CookiesComponent } from './cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    NavBarComponent,
    ReadMeGeneratorComponent,
    HomeComponent,
    ExperimentsComponent,
    EvAndRefComponent,
    Exp2Component,
    FichaAnimalComponent,
    FilhoInputComponent,
    PaiInputComponent,
    FilhoOutputComponent,
    PaiOutputComponent,
    CookiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
