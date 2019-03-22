import { Input, Component, ViewEncapsulation, EventEmitter, Output, ViewChild, ElementRef,AfterViewInit,Renderer2 } from '@angular/core';

@Component({
  selector:'ce-container-button',
  template: `<div #placeHolder></div>`,
  encapsulation: ViewEncapsulation.Native
})
export class ContainerComponent implements AfterViewInit{
  @ViewChild('placeHolder') private ph:ElementRef; 
  constructor(
    private renderer:Renderer2
  ){}
  html = `<div>
    <h1><slot></slot></h1>
    <custom-button label="test" link="/part1/part" (buttonClicked)="onClicksCt()" [innerHTML]="link th 3">link 1</custom-button>
    <custom-button (buttonClicked)="onClicksCt()">link 1</custom-button>
    <custom-button (buttonClicked)="onClicksCt()">link 1</custom-button>
    <custom-button (buttonClicked)="onClicksCt()">link 1</custom-button>
  </div>`

  ngAfterViewInit(){
    this.renderer.setProperty(this.ph.nativeElement,'innerHTML',this.html);
  } 
  onClicksCt() {

    console.log("Clicks count!!!");
  }
}
