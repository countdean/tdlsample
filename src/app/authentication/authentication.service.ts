import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  authAttempt(data){
    console.log(data)
  }

  loginUser(data:any): Observable <any>{
    return this.http.post<any>(environment.API_URL + `/api/login`, data).pipe(tap(res => {
      console.log('test', res);
      localStorage.setItem('token', res.token);
    }))
  }
  
}
