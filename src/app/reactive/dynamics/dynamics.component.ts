import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],    
    favorites: this.formBuilder.array([
      ['Naruto'],
      ['One Piece']
    ], Validators.required)
  });

  get favsArray() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.myForm);
    
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); // Touches all fields that belong to myForm
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
