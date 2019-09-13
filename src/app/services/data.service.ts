import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})



export class DataService {
  
   httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':  '*'
    })
  };


 

  constructor( private http: HttpClient ) { }


  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {headers: {'Access-Control-Allow-Origin':  '*'}}  )
          .pipe( tap( console.log ) );
  }
}
