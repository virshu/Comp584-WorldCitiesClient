import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) { }

  login(item: LoginRequest): Observable<LoginResponse> {
    var url = environment.baseUrl + "api/Account/Login";
    return this.http.post<LoginResponse>(url, item);
  }
}
