import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import * as data from '../../assets/data.json';
import {me} from '../models/me';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  aboutme : me;
  constructor(private httpClient: HttpClient) { 
    this.aboutme = new me();
  }

  async getData(): Promise<any>{
    //this.pdata = <any[]>data;
    //return this.httpClient.get<any[]>('../../assets/data.json');

    await fetch('../../assets/data.json').then(results => results.json()).then(json => {
         this.aboutme = json.aboutme;
    });

    //console.log(this.aboutme.name);
  }

  async getAboutMe():Promise<me>{ 
    return this.aboutme;
  }
}
