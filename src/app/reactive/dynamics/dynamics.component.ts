import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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

  newFav: FormControl = this.formBuilder.control('', Validators.required);

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

  addFav() {
    if (this.newFav.invalid) return;

    //this.myForm.controls.favorites as FormArray
    //favsArray has a reference to myform.controls.favorites
    //in JS all objects are passed by reference.
    this.favsArray.push(this.formBuilder.control(this.newFav.value, Validators.required));
    this.newFav.reset();
  }

  deleteFav(index: number) {
    this.favsArray.removeAt(index);
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
