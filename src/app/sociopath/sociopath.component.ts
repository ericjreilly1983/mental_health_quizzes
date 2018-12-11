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

  constructor() { }

  submitted = false;

  formModel;

  ngOnInit() {

  }

  sendForm(form: FormGroup){
    console.log(this.sociopathForm.value);
    console.log(this.sociopathForm)
    console.log("hi")
    this.submitted = !(this.submitted);
    this.formModel = form;
  }

  goBack(){
    this.submitted =!(this.submitted);
  }

}
