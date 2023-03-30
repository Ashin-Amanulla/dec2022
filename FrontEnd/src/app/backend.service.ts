import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BackendService {



  constructor(private http:HttpClient) { }
api= 'http://localhost:3256'
// addProduct 
addProduct(product:any){
 return this.http.post(`${this.api}/product`,product)
}


getToken():boolean{
  return !!localStorage.getItem('token');
}

//get all data

getData(){
  return this.http.get(`${this.api}/product`)

}

// delete 


deleteItem(id:any){
  return this.http.delete(`${this.api}/product/${id}`)
}

login(data:any){
  return this.http.post(`${this.api}/auth`,data)
}

}
