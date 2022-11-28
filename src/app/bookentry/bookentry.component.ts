import { Component } from '@angular/core';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent {

  Name=""
  Author=""
  Description=""
  Publisher=""
  Language=""
  Distributor=""
  releaseDate=""
  price=""
  Image=""

  readValue=()=>
  {
    let data:any={"Name":this.Name,"Author":this.Author,"Description":this.Description,"Publisher":this.Publisher,"Language":this.Language,"Distributor":this.Distributor,"releaseDate":this.releaseDate,"price":this.price,"Image":this.Image}
  console.log(data)
}

}
