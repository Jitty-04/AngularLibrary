import { Component } from '@angular/core';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  Name=""
  Adhar=""
  Address=""
  pincode=""
  DOB=""
  Email=""
  mobileNumber=""
  userName=""
  password=""
  confirmPassword=""

  readValues=()=>
  {
    let data:any={"Name":this.Name,"Adhar":this.Adhar,"Address":this.Address,"pincode":this.pincode,"DOB":this.DOB,"Email":this.Email,"mobileNumber":this.mobileNumber,"userName":this.userName,"password":this.password,"confirmPassword":this.confirmPassword}
    console.log(data)
  
  }



}
