import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent {

  name=""
  author=""
  description=""
  publisher=""
  language=""
  distributor=""
  year=""
  price=""
  image=""
  
  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"name":this.name,"author":this.author,"description":this.description,"publisher":this.publisher,"language":this.language,"distributor":this.distributor,"year":this.year,"price":this.price,"image":this.image}
  console.log(data)
  this.api.addBook(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("Book added successfully")
        this.name=""
        this.author=""
        this.description=""
        this.publisher=""
        this.language=""
        this.distributor=""
        this.year=""
        this.price=""
        this.image=""
      
        
      } else {
        alert("something went wrong")
      }
    }
  )


}

}


