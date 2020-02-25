import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Question } from 'src/app/models/question.model';
import { Answer } from 'src/app/models/answer.model';
import { QuestionDB } from 'src/app/models/questionFromDB.model';
import { QiuzService } from '../qiuz.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  questions = []
  qs = []
  data: any
  submited = false
  subGroup: any
  isCorrect: any
  indexA: any
  numberOfQs:any
  answeredQs = 0
  score = 0

  constructor(
    private location: Location,
    private quizService: QiuzService) {
  }

  ngOnInit() {
    this.data = (this.location.getState())
    this.fillArrayForQs(this.data)
    this.transformQs(this.data) 

  }
  fillArrayForQs(data){
    this.numberOfQs = Object.values(data)
    this.numberOfQs = this.numberOfQs[1]
    this.subGroup = this.createSubmited(this.numberOfQs)
    this.isCorrect = this.createSubmited(this.numberOfQs)
    this.indexA = this.createA(this.numberOfQs)
  }
  transformQs(data){
    this.qs = Object.values(data)
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
      adoptedQs.question = adoptedQs.question.replace(/(&quot\;)/g,"\"")
      adoptedQs.question = adoptedQs.question.replace(/(&ldquo\;)/g,"\"")
      adoptedQs.question = adoptedQs.question.replace(/(&rdquo\;)/g,"\"")
      adoptedQs.question = adoptedQs.question.replace(/(&#039\;)/g,"\"")
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
 
  private createSubmited(n) {
    let group = []
    for (let index = 0; index < n; index++) {
      group.push(false)
    }
    return group
  }

  private createA(n) {
    let group = []
    for (let index = 0; index < n; index++) {
      group.push(0)
    }
    return group
  }

  correctAnswer(q, n, c) {
    this.subGroup[q] = true
    this.isCorrect[q] = c
    this.indexA[q] = n
    this.answeredQs = this.answeredQs + 1
    if (c == true) {
      this.score = this.score + 1
    }
    if (this.answeredQs == this.numberOfQs) {
      this.finish()
    }
  }

  finish() {
    this.quizService.AlertMessage(this.numberOfQs, this.score)
    this.submited = true
  }

}
