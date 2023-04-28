import { Component, OnInit } from '@angular/core';
import { Cources } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subcribed-cources',
  templateUrl: './subcribed-cources.component.html',
  styleUrls: ['./subcribed-cources.component.css']
})
export class SubcribedCourcesComponent implements OnInit{
  ngOnInit(): void {
    this.subArr=this.subdataserve.Activeuser.cources as Array<Cources>
    console.log(this.subArr)
  }
  subArr:Array<Cources>=[]
constructor(private subdataserve:DataService){
}

}
