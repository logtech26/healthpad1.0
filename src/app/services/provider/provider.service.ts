import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/development';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseUrl = environment.apiUrl;
  
 constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get(this.baseUrl);
  }
}
