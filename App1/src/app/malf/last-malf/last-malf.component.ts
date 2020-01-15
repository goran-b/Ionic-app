import { Component, OnInit } from '@angular/core';
import { Malf } from 'src/app/models/malf.model';
import { MalfService } from '../malf.service';

@Component({
  selector: 'app-last-malf',
  templateUrl: './last-malf.component.html',
  styleUrls: ['./last-malf.component.scss'],
})
export class LastMalfComponent implements OnInit {

malf: Malf
  constructor(private malfService:MalfService) { }

  ngOnInit() {
    this.malfService.lastMalf().valueChanges().subscribe((r)=>{  
      this.malf=r[0] as Malf
      console.log(this.malf,r)
     
    })
    
  }

}
