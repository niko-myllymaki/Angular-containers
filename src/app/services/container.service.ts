import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  containerUrl = 'assets/container.json';
 
  constructor(private http: HttpClient) { }

  getContainersHttp() {
    return this.http.get<{id: number, contents: Array<String>, proprietor: string}[]>(this.containerUrl);
  }
  
}
