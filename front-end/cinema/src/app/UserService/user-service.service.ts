import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { APP_CONFIG } from '../../config';
import { Observable } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private tokenKey = 'auth_token';
  private userKey = 'user_data';
  private apiUrl = `${APP_CONFIG.root_api_uri}register`; 
  private apiUrllog = `${APP_CONFIG.root_api_uri}login`; 

  constructor(private http: HttpClient) {}

  register(userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrllog, credentials);
  }

  setUser(response: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(response.user)); 
    localStorage.setItem(this.tokenKey, response.access_token); 
    
    
  }
  
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey); 
  }

  getUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(router : any): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    if(router)
      router.navigate(["/login"])  
  }
}
