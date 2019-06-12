import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get('http://api.apixu.com/v1/current.json?key=e07c262491494b37857193036190506&q=' + location);
  }
}
