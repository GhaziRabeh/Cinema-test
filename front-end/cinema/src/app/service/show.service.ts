// ShowService

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private apiUrl = `${APP_CONFIG.root_api_uri}shows`; 

  constructor(private http: HttpClient,) {}

  getShows(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

 insertShow(data: any):Observable<any>{
  return this.http.post<any>(this.apiUrl,data)
 }
 deleteShow(id : any) {
  return this.http.delete<any>(`${this.apiUrl}/${id}`)
 }

 getShowById(id: any){
  return this.http.get<any>(`${this.apiUrl}/${id}`)
 }
 updateShow(id: number , data :any){  
  return this.http.patch<any>(`${this.apiUrl}/${id}`,data)
 }
}
