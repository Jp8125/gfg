import { Injectable } from '@angular/core';
import { Personal,Course,Topics,Category,Article,Videos} from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  Foruser:Array<Personal>=[{imgurl:"",title:"",description:""}]
  userCources:Array<Course>=[{title:"",imgsrc:"",subcribers:0,ratings:0,lavel:""}]
  articleCategory:Array<Category>=[{id:0,name:""}]
  userArticles:Array<Article>=[{categoryid:0,name:"",description:"",tag:["",""]}]
  uservidioes:Array<Videos>=[{thumbnail:"",title:"",v_date:new Date("")}]
  usertopics:Array<Topics>=[{category:"",topics:["",""]}]
  learning:Array<string>=["Gate live Classes", "DSA",".NET CORE","SQL"]
  constructor() { }
  getLearnings():Array<string>{
    return this.learning
  }
}
