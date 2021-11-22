import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  path : string = 'https://randomuser.me/api?results=25';

  constructor(public http:HttpClient) { 
    console.log('Hola usuarios ingresados')
  }

  loadUsers(){
    return this.http
    .get(this.path)
  }
  }
