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
  list = []
  malfs = []
  constructor(private malfService: MalfService, private router: Router) { }

  ngOnInit() {
    this.malfService.getUserMalfs().subscribe((r) => {
      this.malfs = r.map(a => {
        const data = a.payload.doc.data() as Malf;
        data.id = a.payload.doc.id;
        return data
      });
      let todayDay = new Date().setHours(0, 0, 0, 0)
      this.malfs = Object.values(this.malfs);
      this.list = this.malfs
      this.malfs = this.malfs.filter((m) => parseFloat(m.date.toString()) == (todayDay))
      if (this.malfs.length == 0) {
        this.list = this.list.filter((m) => parseFloat(m.date.toString()) > (todayDay))
        this.list.sort((a, b) => parseFloat(a.date.toString()) - parseFloat(b.date.toString()))
        this.malfs = this.list.slice(0, 2)
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
