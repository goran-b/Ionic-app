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
  empty=true
  constructor(private malfService: MalfService, private router: Router) { }

  ngOnInit() {
    this.malfService.getUserMalfs().subscribe((r) => {
      this.malfs = r.map(a => {
        const data = a.payload.doc.data() as Malf;
        data.id = a.payload.doc.id;
        return data
      });
      let todayDay = new Date().setHours(0, 0, 0, 0)
      this.malfs = this.malfs.filter((m) => parseFloat(m.date.toString()) < (todayDay))
      this.malfs.sort((a, b) => parseFloat(b.date.toString()) - parseFloat(a.date.toString()))
      this.malfs = this.malfs.slice(0, 3)
      this.malfs.forEach((data) =>
        data.date = new Date(+data.date))
        if(this.malfs.length!=0){
          this.empty=false;
        }
    })

  }

  details(id: String) {
    this.router.navigate(['malf/details/', id])
  }

  edit(id: String) {
    this.router.navigate(['malf/edit/', id])
  }
  delete(id: String) {
    this.malfService.delete(id)
  }

}
