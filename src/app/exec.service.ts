import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExecService {

  private _url = 'http://35.184.253.213/code/';

  constructor(private http: HttpClient) { }

  executeCode(body) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(this._url, body, { headers: headers, responseType: "text" });
  }
}
