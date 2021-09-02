import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';
// Libreria AgileThought
import { ATComponentsModule } from 'at-digital-components';
// Mis componentes
import { CardComponent } from './components/card/card.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CurriculumComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ATComponentsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
