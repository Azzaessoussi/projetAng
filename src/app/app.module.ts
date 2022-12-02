import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
