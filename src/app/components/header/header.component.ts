import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private logserve:AuthService,private router:Router){}
  get status():boolean{
    return this.logserve.isloggedin()
  }
  lgout(){
   this.logserve.logout()
   this.router.navigate(['/login'])
  }
}
