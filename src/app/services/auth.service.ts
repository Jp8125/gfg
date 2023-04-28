import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login:boolean=false
  Useres!:Array<User>
constructor(private dataserv:DataService){
  this.Useres=this.dataserv.UserArray
}
varify(email:string,password:string){
  if(this.Useres.find((userdetail)=>(userdetail.email==email&&userdetail.password==password)))
  {
    this.login=true
  }
  else
  {
    this.login=false
  }
}
isloggedin():boolean{
  return this.login;
}
logout(){
  this.login=false;
}  
}
