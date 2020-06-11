import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { app_routing } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { ComentsComponent } from './components/coments/coments.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    LoginComponent,
    ComentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
