import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(private api:ApiService,private route:Router){}
  username=""
  password=""
  searchUsers:any=[]

  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    this.api.searchUsers(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0){
          alert("Invalid email or password")
          this.username=""
          this.password=""
        }
        else{
          
          this.searchUsers=response;
          let userid=response.userid
          console.log(userid)
          this.route.navigate(["userhome"])

        }
        
          
      }
    )
  
  
  }
}

