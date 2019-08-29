import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
private mydata : Array<object> = [];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }
  public fetchData(){
    this.apiService.viewbookData().subscribe((response:Array<Object>)=>{

     this.mydata=response;
    })
  }
}