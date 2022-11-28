import { Component } from '@angular/core';

@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue.component.html',
  styleUrls: ['./bookissue.component.css']
})
export class BookissueComponent {

  name=""
  title=""
  dateOfIssue=""
  membershipNumber=""

  readValues=()=>
  {
    let data:any={"name":this.name,"title":this.title,"dateOfIssue":this.dateOfIssue,"membershipNumber":this.membershipNumber}
    console.log(data)
  }



}
