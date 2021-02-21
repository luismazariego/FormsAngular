import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  myForm: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    notifications: true,
  };

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      conditions: false
    });

    
    // this.myForm.valueChanges.subscribe(form => {
    //   delete form.conditions; //JS Method delete
    //   this.person = form;
    // });

    //Extract conditions (value not needed) and asign rest to person (only gender and notifications)
    this.myForm.valueChanges.subscribe(({ conditions, ...rest }) => {
      this.person = rest;
    })
  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.conditions; //JS Method delete

    console.log(formValue);
    
  }

  
}
