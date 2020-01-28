import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssaBAKComponent } from './issa-bak/issa-bak.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IssaBAKComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Line to add
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
