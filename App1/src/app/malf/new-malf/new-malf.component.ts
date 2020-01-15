import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MalfService } from '../malf.service';

@Component({
  selector: 'app-new-malf',
  templateUrl: './new-malf.component.html',
  styleUrls: ['./new-malf.component.scss'],
})
export class NewMalfComponent implements OnInit {
  public form: FormGroup;

  constructor(public router: Router, 
    public formBuilder: FormBuilder,
    private malfService:MalfService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [''],
      relationship: [''],
      job: [''],
      spiritual:[''],
      physical: [''],
      social: [''],
      material: [''],
      date: [''],
    });
  }
  onSave(form){ 
    if(form.value.date!==''){
    form.value.date=new Date(form.value.date).setHours(0,0,0,0).toString();}
    let data=form.value 
    this.malfService.save(data);
    this.form.reset();
  }

}
