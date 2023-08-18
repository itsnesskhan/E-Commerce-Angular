import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]';
  constructor(private _http:HttpClient) { }


  public register(userData:any){
    return this._http.post<any>(this._url, userData);
  }

}
