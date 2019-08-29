import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mydata:Array<object>=[];

  constructor(private apiservice:ApiService) { }

  onSubmit(data:NgForm)
  {
    this.apiservice.userregisterdata(data.value).subscribe((response:any)=>{
      console.log(response);
      this.mydata=response;
      if(response._id != null)
      {
        alert('Successfully Registered');
      }
    });
  }

  ngOnInit() {
  }
}
