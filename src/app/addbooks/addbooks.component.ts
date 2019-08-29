import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  onSubmit(data:NgForm){
    console.log(data.value);
    this.apiservise.addbookdata(data.value).subscribe((response)=>{
      console.log(response);
      alert("Successfully inserted");
    });
   
  }
constructor(private apiservise:ApiService) { }

ngOnInit() {
}
}