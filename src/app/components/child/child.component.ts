import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges, AfterViewInit {

  @Input() parentInfo = 0;
  @Output() childEmiter = new EventEmitter<number>();

  @ViewChild('specialContent') specialContent:any;


  constructor(){
    console.log('I am the constructor');
  }

  sendToParent(){
    this.childEmiter.emit(Math.random());
  }



  ngOnChanges(){
    console.log('OnChanges: Ejecuta siempre luego de un cambio en el input')
  }

  ngOnInit(){
    console.log('OnInit');
    console.log(this.specialContent)
  }

  ngAfterViewInit(){
    console.log('OnAfterViewInit')
    // console.log(this.specialContent)
    this.specialContent.nativeElement.style.color = 'blue';
  }

  ngOnDestroy(){
    console.log('OnDestroy')
  }
  


}
