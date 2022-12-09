import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent {
  constructor(private api:ApiService){
    api.fetchBook().subscribe(
        (response:any)=>
        {
          this.data=response;
        }
      )
    }
    
      data:any=[] 

   

}
