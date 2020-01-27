import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QiuzService } from '../qiuz.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit {
  public form: FormGroup;
  categories = []
  constructor(private formBuilder: FormBuilder, private quizService: QiuzService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      category: ['9'],
      number: ['10'],
      difficulty: ['']
    });
    this.quizService.getCategories().subscribe((r) => {
      this.categories = Object.values(r)
      this.categories=this.categories[0]
    }
    )
  }
  start(form) {
    this.quizService.getQuestions(form.value)
  }
}
