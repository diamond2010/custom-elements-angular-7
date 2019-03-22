import { Input, Component, ViewEncapsulation, EventEmitter, Output, HostListener,  } from '@angular/core';
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
//import {BehaviourSubject} from 'rxjs/internal/BehaviourSubject';

@Component({
  template: `

  <button (click)="handleClick()">{{label}}:{{clicksCt}}</button>
  `,
  styles: [`
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  @Input() label: string;
  @Input() link: string;

  
  @Output('buttonClicked') action = new EventEmitter<number>();
  clicksCt = 0;
  //private _routerLinkSource = new BehaviourSubject<ActivatedRoute>(null);

  constructor(private router:Router){}
  @HostListener('click',['$event','$event.target'])
  
  handleMouseDown(event,target,host){

    console.log('HostListener --> mousedown event', event);
    console.log('HostListener --> mousedown taget', target);
    console.log('HostListener --> mousedown host', host);
    this.navigate(this.link)

  }
  navigate(target){
    this.routerSource()
    console.log('HostListener --> mousedown navigate', target);
  }  
  handleClick() {
    this.clicksCt++;
    this.action.emit();
  }
}
