import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewauthors',
  templateUrl: './viewauthors.component.html',
  styleUrls: ['./viewauthors.component.css']
})
export class ViewauthorsComponent implements OnInit {
  mydata:Array<object>=[];

  constructor(private apiservice:ApiService) { }

  ngOnInit() {

    this.apiservice.viewauthorData().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

}