import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public parentInfo = 45;
  public informationRecivedFromParent = 0;
  public showChild = true

  incrementParentInfo(){
    this.parentInfo++;
  }
  receiveFromChild(ev: any){
    console.log(ev)
    this.informationRecivedFromParent = ev
  }

  toggleChildComponent(){
    this.showChild = !this.showChild;
  }
}
