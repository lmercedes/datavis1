import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NvD3Module } from 'ng2-nvd3';

import { GraficoTestComponent } from './grafico-test/grafico-test.component';


import 'd3';
import 'nvd3';


@NgModule({
  declarations: [
    AppComponent,
    GraficoTestComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module
  ],
  exports: [GraficoTestComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
