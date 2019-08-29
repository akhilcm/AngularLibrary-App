import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  addbookdata(data){
    return this.http.post("https://libraryap.herokuapp.com/read",data);
  }
  viewbookData(){
    return this.http.get("https://libraryap.herokuapp.com/getdatas");

  }
  addauthordata(data){
    return this.http.post("https://libraryap.herokuapp.com/readdata",data);
  }
  viewauthorData(){
    return this.http.get("https://libraryap.herokuapp.com/getauthordatas");
}
userregisterdata(data)
  {
    return this.http.post("https://libraryap.herokuapp.com/employeeregister1",data);
  }
  userlogindata(data)
  {
    return this.http.post("https://libraryap.herokuapp.com/employeelogin1",data);
  }
}
