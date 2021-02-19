import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4080ti'),
  //   price: new FormControl(1550),
  //   stock: new FormControl(5),
  // })

  //form builder
  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.min(0)]],
    stock: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'RXT 4000tx',
      price: 1500,
    })
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
