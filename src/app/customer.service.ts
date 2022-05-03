import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/Users"
 getUsers(){
   return this.http.get(this.url)
 }
 deleteItem(id:any){
  return this.http.delete(`${this.url}/${id}`)
  
    }

    createId(data: any) {
      console.log(data)
      return this.http.post(this.url, data)
    }

  getCurrentUser(id:any){
return this.http.get(`${this.url}/${id}`)
  }
  updateCurrentUser(id:any,data:any){
return this.http.put(`${this.url}/${id}`,data)
  }
  
}
