import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Question } from 'src/app/models/question.model';
import { Answer } from 'src/app/models/answer.model';
import { QuestionDB } from 'src/app/models/questionFromDB.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  form: FormGroup
  questions = []
  qs = []
  data: any
  dataForNumberOfQs: any
  submited= false
  numberOfQs
  score=0
  items: FormArray;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder) {

    this.dataForNumberOfQs = (this.location.getState())
    this.numberOfQs = Object.values(this.dataForNumberOfQs)
    this.numberOfQs = this.numberOfQs[1]
  }

  ngOnInit() {
    this.form = new FormGroup({
      formArrayName: this.formBuilder.array([])
    })
    this.buildForm();
    
    this.data = (this.location.getState())
    this.qs = Object.values(this.data)
    this.qs = this.qs[0]
    this.qs = Object.values(this.qs)
    this.qs = this.qs[1]
    this.qs.forEach((el) => {
      let f: QuestionDB = Object.assign(el)
      let adoptedQs: Question = {
        question: "",
        answers: [{ answer: "", correct: null }],
        id: ''
      }
      adoptedQs.question = f.question
      adoptedQs.id = this.qs.indexOf(f).toString()
      f.incorrect_answers.forEach((e) => {
        let ans: Answer = { answer: "", correct: null }
        ans.answer = e
        ans.correct = false
        adoptedQs.answers.push(ans)
      })
      let an: Answer = { answer: "", correct: null }
      an.answer = f.correct_answer
      adoptedQs.answers.shift();
      an.correct = true
      adoptedQs.answers.push(an)
      adoptedQs.answers = adoptedQs.answers.sort(() => Math.random() - 0.5)
      this.questions.push(adoptedQs)
    })

  }
  onSubmit(form) {
    let val=[]
    val=Object.values(form.value)
    val=val[0] 
    val.forEach((e)=>{
      if(e.id=="true"){
        this.score=this.score+1
      }
    })
    this.submited=true
  }

  private buildForm() {
    const controlArray = this.form.get('formArrayName') as FormArray;
    const a=this.createFormControl(this.numberOfQs)
    Object.keys(a).forEach((i) => {
      controlArray.push(
        this.formBuilder.group({
          id: new FormControl({ })
        })
      )
    })

  }
  private createFormControl(num) {
    let group = []
    for (let index = 0; index < num; index++) {
      group.push(index.toString())
    }
    return group
  }
}
