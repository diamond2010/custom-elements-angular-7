import { Component, Injector, Renderer } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button.component';
import { ContainerComponent } from './container.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(injector: Injector) {
    
    const customButton = createCustomElement(ButtonComponent, { injector: injector });
    customElements.define('custom-button', customButton);

    const customContainer = createCustomElement(ContainerComponent, { injector: injector });
    customElements.define('custom-container', customContainer);
  }
  ngDoBootstrap(){}
}
