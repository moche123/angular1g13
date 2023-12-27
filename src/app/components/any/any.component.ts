import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-any',
  templateUrl: './any.component.html',
  styleUrls: ['./any.component.scss']
})
export class AnyComponent implements OnInit{
  public characteres$ = new Observable<any>();
  constructor( private apiService: ApiService ){}
  // public characteresList:any[] = [];
  // public subscription$ = new Subscription();

  ngOnInit(): void {
    this.characteres$ = this.apiService.getCharacteres()
  }

  // ngOnInit(){
  //   this.subscription$ = this.apiService.getCharacteres().subscribe( res => {
  //     this.characteresList = res
  //   } )
  // }

  // ngOnDestroy(): void {
  //   this.subscription$.unsubscribe()
  // }


}
