import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mydata:Array<object>=[];

  constructor(private apiservice:ApiService) { }

  onSubmit(data:NgForm)
  {
    this.apiservice.userlogindata(data.value).subscribe((response:any)=>{
      console.log(response);
      this.mydata=response;
      if(response.length > 0)
      {
        alert('Login Successfull');
      }
      else
      {
        alert('Login Unsuccessfull');
      }
    });
  }

  ngOnInit() {
  }

}