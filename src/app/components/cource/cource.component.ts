import { Component, OnInit } from '@angular/core';
import { Cources } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.css']
})
export class CourceComponent implements OnInit{
  ngOnInit(): void {
    this.courceArray=this.courcedata.CourceArray
  }
  courceArray!:Array<Cources>
  constructor(private courcedata:DataService){
  }
sub(subcource:Cources){
  console.log(subcource);
  this.courcedata.Activeuser.cources?.push(subcource)
  console.log(this.courcedata.Activeuser)
  subcource.subscribed=true;
}
}
