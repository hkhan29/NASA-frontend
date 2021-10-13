import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url:string = `http://localhost:6060/nasa`;

  constructor(private http: HttpClient) { }

  getPhotos(date: string){
    return this.http.get<any>(`${this.url}/${date}`);
  }
}
