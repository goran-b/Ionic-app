import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-malf',
  templateUrl: './new-malf.component.html',
  styleUrls: ['./new-malf.component.scss'],
})
export class NewMalfComponent implements OnInit {
  public form: FormGroup;

  constructor(public router: Router, public formBuilder: FormBuilder) {



  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      love: [''],
      job: [''],
      spiritulity:[''],
      phisical: [''],
      social: [''],
      material: [''],
      date: [''],
    });
  }
  onSave(form){
    console.log(form.value)

  }

}
