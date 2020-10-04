import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private SERVER_URL = environment.SERVER_URL
  constructor(private http:HttpClient) { }
  getAllProduct(){
    return this.http.get(this.SERVER_URL);
  }
}
