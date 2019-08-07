import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public url = "/assets/Data/Heroes.json";

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url);
  }

}
export class Hero {
  id: number;
  name: string;
  isSecret = false;
}

export const HEROES: Hero[] = [];
