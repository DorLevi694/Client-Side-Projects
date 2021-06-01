import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMovieById(id: string): Promise<Movie> {
    console.log("getMovieById"+id);

    let res = this.http.get<Movie>('http://localhost:3000/movies/'+id)
                       .toPromise();
    return res;
    // return {
    //   id: 1,
    //   "caption": "1",
    //   description: "ddd",
    //   poster: "p"
    // }
  }


}
