import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NvD3Component } from 'ng2-nvd3' ;

import 'd3';
import 'nvd3';
import { GraficoTestComponent } from './grafico-test/grafico-test.component';


@NgModule({
  declarations: [
    AppComponent,
    GraficoTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
