import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  constructor(private api:ApiService){}

  name=""
  adhar=""
  address=""
  pincode=""
  date=""
  email=""
  mb=""
  username=""
  password=""
  confirmPassword=""
  

  readValues=()=>
  {
    let data:any={"name":this.name,"adhar":this.adhar,"address":this.address,"pincode":this.pincode,"date":this.date,"email":this.email,"mb":this.mb,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addUsers(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("user registered successfully")
         
      
          
        } else {
          alert("something went wrong")
        }
      }
    )
  
  
  }
  
  }




