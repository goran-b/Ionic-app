import { Component, OnInit } from '@angular/core';
import { Malf } from 'src/app/models/malf.model';
import { MalfService } from '../malf.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-malf',
  templateUrl: './last-malf.component.html',
  styleUrls: ['./last-malf.component.scss'],
})
export class LastMalfComponent implements OnInit {

  malf: Malf
  constructor(private malfService: MalfService,private router: Router) { }

  ngOnInit() {
    this.malfService.lastMalf().snapshotChanges().subscribe((r) => {
      r.map(a => {
        const data = a.payload.doc.data() as Malf;
        data.id = a.payload.doc.id;
        data.date=new Date(+data.date);
        this.malf = data
      });
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
