import { Component, OnInit } from '@angular/core';
import { Malf } from 'src/app/models/malf.model';
import { MalfService } from '../malf.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-malf',
  templateUrl: './history-malf.component.html',
  styleUrls: ['./history-malf.component.scss'],
})
export class HistoryMalfComponent implements OnInit {
  malfs: Malf[];
  constructor(private malfService:MalfService, private router: Router) { }

  ngOnInit() {
    this.malfService.getUserMalfs().subscribe((r)=>{  
      this.malfs=r.map(a => {
        const data = a.payload.doc.data() as Malf;
        data.id = a.payload.doc.id;
        return data
      });
      this.malfs.sort((a, b) => parseFloat(b.date.toString()) - parseFloat(a.date.toString()))
      this.malfs.forEach((data)=>
      data.date=new Date(+data.date))
    })
 
  }

  details(id:String){
    this.router.navigate(['malf/details/', id])
  }
  edit(id:String){
    this.router.navigate(['malf/edit/', id])
  }
  delete(id:String){
    this.malfService.delete(id)}

}
