import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GasResponse } from '../interfaces/gas.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GasService {

  constructor( private http: HttpClient ) { }

  public getGas(): Observable<GasResponse>{
   return this.http.get<GasResponse>(`${environment.apiBaseUrl}`)
  }

}
