import { Component, OnInit } from '@angular/core';
import { MalfService } from '../malf.service';
import { Malf } from 'src/app/models/malf.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-malf',
  templateUrl: './list-malf.component.html',
  styleUrls: ['./list-malf.component.scss'],
})
export class ListMalfComponent implements OnInit {
malfs: Malf[];
  constructor(private malfService:MalfService, private router: Router) { }

  ngOnInit() {
    this.malfService.getLastThreeMalfs().subscribe((r)=>{  
      this.malfs=r.map(a => {
        const data = a.payload.doc.data() as Malf;
        data.id = a.payload.doc.id;
        data.date=new Date(+data.date);
        return data
      });
      console.log(this.malfs)
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
