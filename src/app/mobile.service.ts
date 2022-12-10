import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MobileService {
  phones: any;
  baseUrl ="http://localhost:3000/user";
  constructor(private http:HttpClient) { }
   

getMobiles(){
 return this.http.get(this.baseUrl)
}
 deleteMobile(id:any){
  return this.http.delete(this.baseUrl + '/'+ id);
}
postMobile(body:any){
  return this.http.post(this.baseUrl,body);
}
putMobile(body:any){
  return this.http.put(this.baseUrl,body);
}


}
