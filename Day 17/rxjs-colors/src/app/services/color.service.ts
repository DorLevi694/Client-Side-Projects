import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALLCOLORS } from '../models/all-colors';
import { Color } from '../models/color.model';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private allColors: Color[] = [];
  results$ = new Observable<Color[]>();

  constructor() {
    this.allColors =
      Object
        .keys(ALLCOLORS)
        .map(key => (
          {
            code: key,
            name: ALLCOLORS[key]
          })
        );

    console.log(this.allColors);
  }

  async search(keyword: string): Promise<Color[]> {
    if (!keyword)
      return [];

    console.log(`start search - ${keyword}`);
    keyword = keyword.toLowerCase();

    let res = this.allColors
      .filter(color => color.name.toLowerCase().includes(keyword));

    await this.delay(2000);

    console.log('Completed search');
    return res;
  }

  async delay(millis: number): Promise<void> {
 return new Promise(resolve =>
        { 
          setTimeout(resolve, millis)  
        } 
      );
  }

}
