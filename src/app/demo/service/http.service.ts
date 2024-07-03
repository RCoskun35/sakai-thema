import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api:String="https://localhost:7054"
  token:String = "";

  constructor(private http: HttpClient) { 
    this.token=localStorage.getItem('token');
  }
  post<T>(apiUrl:string, body:any, callBack:(res:T)=> void,errorCallBack?:()=> void ){
    this.token=localStorage.getItem('token');
    this.http.post<T>(`${this.api}/${apiUrl}`,body,{
      headers: {
       "Authorization": `Bearer ${this.token}`
      }
    }).subscribe({
      next: (res)=> {
        if(res){
          callBack(res);
        }        
      },
      error: ()=> {
        if(errorCallBack){
          errorCallBack();
        }
      }
    })
  }
}
