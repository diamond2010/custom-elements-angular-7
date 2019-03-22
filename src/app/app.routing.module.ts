import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, Renderer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import {AppComponent} from './app.component'


const routes:Routes = [
  {path:'**', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:AppComponent, pathMatch:'full'},

]

@NgModule({
  imports:[
   RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
