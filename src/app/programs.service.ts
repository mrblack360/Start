import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: NgxDhis2HttpClientService) { }

  getPrograms() {
    return this.http.get('');
  }
}
