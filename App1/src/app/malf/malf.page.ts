import { Component, OnInit } from '@angular/core';
import { MalfService } from './malf.service';
import { Malf } from '../models/malf.model';

@Component({
  selector: 'app-malf',
  templateUrl: './malf.page.html',
  styleUrls: ['./malf.page.scss'],
})
export class MalfPage implements OnInit {
  malfs: Malf[]
  todayMalfs = []
  listMalfs = []
  constructor(private malfService: MalfService) { }

  ngOnInit() {
    this.malfService.getUserMalfs().subscribe((r) => {
      this.malfs = r.map(a => {
        const data = a.payload.doc.data() as Malf;
        data.id = a.payload.doc.id;
        return data
      });
      let todayDay = new Date().setHours(0, 0, 0, 0)
      this.todayMalfs = Object.values(this.malfs);
      this.listMalfs = Object.values(this.malfs);
      this.todayMalfs = this.todayMalfs.filter((m) => parseFloat(m.date.toString()) >= todayDay)
      this.listMalfs = this.listMalfs.filter((m) => parseFloat(m.date.toString()) < todayDay)
    })
  }
}
