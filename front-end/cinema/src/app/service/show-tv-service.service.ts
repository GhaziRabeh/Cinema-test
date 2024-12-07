import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class ShowTvServiceService {

  private apiUrl = `${APP_CONFIG.root_api_uri}admin/showtv`; 

  constructor(private http: HttpClient) {}

  
  getShowTv(): Observable<any> {
    const response =  this.http.get<any>(this.apiUrl);
    console.log("response tv",response);
    
    return response
  }

 
  insertShowTv(dataShowTv: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, dataShowTv);
  }


  deleteShowTv(id: any) {

    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }


  getShowTvById(id: any) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  
  updateShowTv(id: number, dataShowTv: FormData) {  
    return this.http.put<any>(`${this.apiUrl}/${id}`, dataShowTv);
  }

 
  getShowTvByCategory(categoryId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/category/${categoryId}`)
  }
}
