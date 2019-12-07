import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get('http://api.weatherstack.com/current?access_key=9248389a0522e111f3404e257b1815df&query=' + location);
  }
}
