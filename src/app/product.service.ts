import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) { }

  public getAlbum(id: number)
  {
    this._http.get(this._albumUrl).pipe(map(data => {})).subscribe(result => {
      console.log(result);
    });
  }
}
