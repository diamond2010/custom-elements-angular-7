import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, Renderer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button.component';
import { ContainerComponent } from './container.component';
import { overrideRenderFactory } from '../shadow-dom-renderer'

const routes:Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:AppComponent, pathMatch:'full'},

]

@NgModule({
  imports: [BrowserModule,AppRoutingModule],
  declarations: [AppComponent, ButtonComponent, ContainerComponent],
  entryComponents: [ButtonComponent, ContainerComponent],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [overrideRenderFactory()]
})
export class AppModule {
    constructor(private injector: Injector) {
      
    }
}
