import { Component, OnInit } from '@angular/core';
import { MalfService } from '../malf.service';
import { Malf } from 'src/app/models/malf.model';

@Component({
  selector: 'app-list-malf',
  templateUrl: './list-malf.component.html',
  styleUrls: ['./list-malf.component.scss'],
})
export class ListMalfComponent implements OnInit {
malfs: Malf[];
  constructor(private malfService:MalfService) { }

  ngOnInit() {
    this.malfService.lastThreeMalf().valueChanges().subscribe((r)=>{  
      this.malfs=r as Malf[]
      console.log(this.malfs,r)
     
    })
 
  }
}
