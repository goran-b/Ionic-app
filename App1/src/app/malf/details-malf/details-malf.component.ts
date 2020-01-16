import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MalfService } from '../malf.service';
import { Malf } from 'src/app/models/malf.model';

@Component({
  selector: 'app-details-malf',
  templateUrl: './details-malf.component.html',
  styleUrls: ['./details-malf.component.scss'],
})
export class DetailsMalfComponent implements OnInit {
  malf: Malf

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private malfService:MalfService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.malfService.getMalfbyId(id).subscribe((r)=>{
        const data = r.data() as Malf;
        data.id = r.id;
        data.date=new Date(+data.date);
        this.malf = data        
      })     
    })
  }

  edit(id:String){
    this.router.navigate(['malf/edit/', id])
  }
  delete(id:String){
    this.malfService.delete(id)}
}
