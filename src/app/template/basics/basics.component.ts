import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;
  initForm = {
    product: 'RTX 4080ti',
    price: 0,
    stock: 10
  }

  constructor() {}

  ngOnInit(): void {}

  isValidName(): boolean {
    return (
      this.myForm?.controls.product?.invalid &&
      this.myForm?.controls.product?.touched
    );
  }

  isValidPrice(): boolean {
    return this.myForm?.controls.price?.touched
      && (Number(this.myForm?.controls.price?.value) < 0 ||
      this.myForm?.controls.price?.value <= '');
  }

  save() {
    console.log('submit done');
    this.myForm.resetForm({
      product: 'Something',
      price: 0,
      stock: 0
    });
  }
}
