import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MalfService } from '../malf.service';
import { Malf } from 'src/app/models/malf.model';

@Component({
  selector: 'app-new-malf',
  templateUrl: './new-malf.component.html',
  styleUrls: ['./new-malf.component.scss'],
})
export class NewMalfComponent implements OnInit {
  public form: FormGroup;
  malf: Malf
  private edit=false

  constructor(public router: Router,
    public formBuilder: FormBuilder,
    private malfService: MalfService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');

        this.malfService.getMalfbyId(id).subscribe((r) => {
          const data = r.data() as Malf;
          data.id = r.id;
          data.date = new Date(+data.date);
          this.malf = data
          this.edit=true

          this.form = this.formBuilder.group({
            title: [data.title],
            relationship: [data.relationship],
            job: [data.job],
            spiritual: [data.spiritual],
            physical: [data.physical],
            social: [data.social],
            material: [data.material],
            date: [data.date.toISOString()]
          });

        })
      }

      this.form = this.formBuilder.group({
        title: [''],
        relationship: [''],
        job: [''],
        spiritual: [''],
        physical: [''],
        social: [''],
        material: [''],
        date: ['']
      });
    })


  }
  onSave(form) {
    if (form.value.date !== '') {
      form.value.date = new Date(form.value.date).setHours(0, 0, 0, 0).toString();
    }
    else if (form.value.date == '') {
      form.value.date = new Date().setHours(0, 0, 0, 0).toString()
    }

    let data = form.value
    if (this.edit) {
      data.id = this.malf.id
    }
    this.malfService.save(data);
    this.form.reset();
  }

}
