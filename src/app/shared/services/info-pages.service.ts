import { Injectable } from '@angular/core';
import {Info} from '../models/info';
import {HttpClient} from '@angular/common/http';




@Injectable()
export class InfoPagesService {

  info: Info = {};
  cargada = false;

  constructor(private http: HttpClient) { 

    this.cargarInfo();
  }

  private cargarInfo() {

this.http.get('assets/data/data-pagina.json')
.subscribe((resp: Info) => {
this.cargada = true;
this.info = resp;

})

  }

}

