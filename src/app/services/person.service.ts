import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient
    .get('../../assets/data.json');
  }
}
