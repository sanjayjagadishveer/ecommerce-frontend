import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { url } from "inspector";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) {

  }



  login(loginBody: any) {
    const url = `${this.baseUrl}login`
    return this.http.post(url, loginBody);
  }
  register(registerBody: any) {
    const url = `${this.baseUrl}register`
    return this.http.post(url, registerBody);
  }

getProductDetails(productId: any){
  const url = `${this.baseUrl}get-product-details/${productId}`
  return this.http.get(url);
}

getCategaryDetails(){
  const url = `${this.baseUrl}get-main-product`
  return this.http.get(url);
}
  
  
}