import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent {

  constructor(private api:ApiService){
    api.fetchBook().subscribe(
        (response:any)=>
        {
          this.data=response;
        }
      )
    }
    
      data:any=[] 
  
  
  name=""
  searchBook:any=[]
  readValues=()=>
  {
    let data:any={"name":this.name}
    console.log(data)
    this.api.searchBook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0){
          alert("Invalid Book name")
          this.name=""
        }
        else{
          this.data=[];
          this.searchBook=response;

        }
        
          
      }
    )
  
  
  }
  
}
