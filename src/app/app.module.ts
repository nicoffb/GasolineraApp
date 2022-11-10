import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GastListComponent } from './componentes/gast-list/gast-list.component';
import { MaterialImportsModule } from 'src/material-imports/material-imports.module';

@NgModule({
  declarations: [
    AppComponent,
    GastListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
