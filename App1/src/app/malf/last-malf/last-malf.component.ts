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

  malfs: Malf[]
  constructor(private malfService: MalfService, private router: Router) { }

  ngOnInit() {
    this.malfService.getUserMalfs().subscribe((r) => {
      this.malfs = r.map(a => {
        const data = a.payload.doc.data() as Malf;
        data.id = a.payload.doc.id;
        return data
      });
      this.malfs.sort((a, b) => parseFloat(b.date.toString()) - parseFloat(a.date.toString()))
      let todayDay = new Date().setHours(0, 0, 0, 0)
      this.malfs = this.malfs.filter((m) => parseFloat(m.date.toString()) == (todayDay))
      if (this.malfs.length == 0) {
        this.malfs = r.map(a => {
          const data = a.payload.doc.data() as Malf;
          data.id = a.payload.doc.id;
          return data
        });
        this.malfs.sort((a, b) => parseFloat(b.date.toString()) - parseFloat(a.date.toString()))
        let todayDay = new Date().setHours(0, 0, 0, 0)
        this.malfs = this.malfs.filter((m) => parseFloat(m.date.toString()) > (todayDay))
        this.malfs.slice(0, 2)
      }
      this.malfs.forEach((data) =>
        data.date = new Date(+data.date))
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
