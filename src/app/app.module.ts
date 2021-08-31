import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Libreria AgileThought
import { ATComponentsModule } from 'at-digital-components';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ATComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
