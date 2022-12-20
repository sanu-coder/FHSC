import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FhscServiceService {
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'my-auth-token'
    })
  };
  constructor(private http : HttpClient) { 

  }
  register(user :any){
    return this.http.post('https://explorenearbyplacesbackend.onrender.com/user',
    user,
    this.httpOptions);
  }
  login(user:any){
    console.log(user);
    return this.http.post('https://explorenearbyplacesbackend.onrender.com/users',
    user,
    this.httpOptions);
  }
  getHospitals(){
    return this.http.get('https://explorenearbyplacesbackend.onrender.com/hospitals');
  }
  getFoods(){
    return this.http.get('https://explorenearbyplacesbackend.onrender.com/cafes');
  }
  getShoppings(){
    return this.http.get('https://explorenearbyplacesbackend.onrender.com/shopping');
  }
}
