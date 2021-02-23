import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from 'src/app/shared/validator/validations';
//import { emailPattern, namePattern, validUsername } from 'src/app/shared/validator/validations';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.namePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.validUsername],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.validatorService.equalFields('password', 'password2')],
    }
  );


  get emailErrorMsg(): string{
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email is required'
    } else if (errors?.pattern) {
      return 'Typed value has incorrect format'
    } else {
      return 'Email has been already taken'
    }
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Luis Mazariego',
      email: 'mazariego@gmail.com',
      username: 'LuisMazar90',
      password: '123456',
      password2: '123456',
    });
  }

  isValid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }


  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
