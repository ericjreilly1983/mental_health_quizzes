import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sociopath',
  templateUrl: './sociopath.component.html',
  styleUrls: ['./sociopath.component.css']
})

export class SociopathComponent implements OnInit {


sociopathForm = new FormGroup({
  name: new FormControl('', Validators.required),
  firstQuestion: new FormControl('', Validators.required),
  secondQuestion: new FormControl('', Validators.required),
  thirdQuestion: new FormControl('', Validators.required),
  fourthQuestion: new FormControl('', Validators.required),
  fifthQuestion: new FormControl('', Validators.required)
});

name;
firstAnswer;
secondAnswer;
thirdAnswer;
fourthAnswer;
fifthAnswer;
score;
results;

  constructor() { }

  submitted = false;

  formModel;

  ngOnInit() {

  }

  sendForm(form: FormGroup){;
    this.results = "";
    //display next page
    this.submitted = !(this.submitted);
    this.formModel = form;
    //calculate results
    this.name = this.formModel.controls.name.value;
    this.firstAnswer = parseInt(this.formModel.controls.firstQuestion.value, 10)
    this.secondAnswer = parseInt(this.formModel.controls.secondQuestion.value, 10)
    this.thirdAnswer = parseInt(this.formModel.controls.thirdQuestion.value, 10)
    this.fourthAnswer = parseInt(this.formModel.controls.fourthQuestion.value, 10)
    this.fifthAnswer = parseInt(this.formModel.controls.fifthQuestion.value, 10)

    this.score = this.firstAnswer + this.secondAnswer + this.thirdAnswer + this.fourthAnswer + this.fifthAnswer;
    if(this.score <= 13 && this.score >= 5){
      this.results = "You are definitely not a sociopath.  You might even be too perfect - try being a little bad once in a while!"
    } else if (this.score > 13 && this.score <= 21) {
        this.results = "You're about average.  In today's world, that's saying a lot."
      } else {
        this.results = "Woah!  I sure hope I never run into you, crazypants!"
      }
  };

  goBack(){
    this.submitted =!(this.submitted);
  }

}
