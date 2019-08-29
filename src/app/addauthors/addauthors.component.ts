import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css']
})
export class AddauthorsComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.apiservice.addauthordata(data.value).subscribe((response:any)=>{
      console.log(response);
      alert('Inserted');
    });
  }

  ngOnInit() {
  }

}