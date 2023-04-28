import { Injectable } from '@angular/core';
import { Cources, User, MainCource } from '../interfaces';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  Activeuser:User={} as User
  UserArray: Array<User> = [
    {
      id: 1,
      firstname: 'Dharmik',
      lastname: 'Gajjar',
      middlename: 'Kaushikbhai',
      email: 'dgajjar81@gmail.com',
      technologies: ['Angular', '.Net'],
      password: '111gajjar',
      cources:[]
    },
    {
      id: 2,
      firstname: 'neha',
      lastname: 'Parekh',
      middlename: 'Maheshbhai',
      email: 'np12@gmail.com',
      technologies: ['Angular', '.Net'],
      password: 'np112',
      cources:[]
    }
  ];
  CourceArray: Array<Cources> = [
    {
      id: 1,
      title: 'Html Beginner',
      imgurl: '',
      modules: 2,
      totalhours: 16,
      level: 'Beginner',
      subscribed: false,
      mainCourceId: 1,
      description:"html beginner level cource with normal html tags"
    },
    {
      id: 2,
      title: 'Html Intermediate',
      imgurl: '',
      modules: 1,
      totalhours: 8,
      level: 'intermidiate',
      subscribed: false,
      mainCourceId: 1,
      description:"this is the cource for those who have completed html basics"
    },
    {
      id: 3,
      title: 'Css low',
      imgurl: '',
      modules: 3,
      totalhours: 24,
      level: 'Beginner',
      subscribed: false,
      mainCourceId: 2,
      description:"css  basic level cource whch explains bsic concept of css"
    },
    {
      id: 4,
      title: 'Css Expert',
      imgurl: '',
      modules: 1,
      totalhours: 8,
      level: 'Intermidiate',
      subscribed: false,
      mainCourceId: 2,
      description:"this css cource is for the students who completed css beginner level cource and do the more designing the html pages"
    }
  ];
  constructor() {}
}
