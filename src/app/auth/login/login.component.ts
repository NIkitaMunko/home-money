import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'wfm-login',
  imports: [
    SharedModule,
    NgIf,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    console.log(this.form);
  }

}
