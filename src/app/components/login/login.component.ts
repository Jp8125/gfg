import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logincred!:FormGroup

constructor(private user:AuthService,private route:Router,private fb:FormBuilder,private userData:DataService){

this.logincred=this.fb.group(
{
useremail:[''],
password:['']
}
)

}
login(){
this.user.varify(this.logincred.value.useremail,this.logincred.value.password)
if(this.user.login){
  console.log("user logged in successfully")
  this.userData.Activeuser=this.userData.UserArray.find(obj=>obj.email==this.logincred.value.useremail) as User
  this.route.navigate(['/home'])
}
else{
  console.log("user logged in failed")
}
}
}
