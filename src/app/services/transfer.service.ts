import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

   sentData = new Subject();

  constructor() { }


  getData(data){
    console.log(data);
    
   return this.sentData.next(data);
  }



}
