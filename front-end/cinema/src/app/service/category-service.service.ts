import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private apiUrl = `${APP_CONFIG.root_api_uri}admin/categories`; 

  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  insertCategory(dataCategory: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, dataCategory);
  }
 deletetegory(id : any) {
  return this.http.delete<any>(`${this.apiUrl}/${id}`)
 }

 getCategoryById(id: any){
  return this.http.get<any>(`${this.apiUrl}/${id}`)
 }
 updatetegory(id: number , dataCategory :FormData){  
  return this.http.put<any>(`${this.apiUrl}/${id}`,dataCategory)
 }
}
