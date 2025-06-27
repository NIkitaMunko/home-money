import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {NgClass, NgIf} from '@angular/common';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';

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
  message!: Message;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  private showMessage(text: string, type: string = 'danger'): void {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000)
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User | undefined) => {
        if (user) {
          if (user.password === formData.password) {
            // todo
          } else {
            this.showMessage('Пароль не верный');
          }
        } else {
          this.showMessage('Такого пользователя не существует');
        }
      })
  }

}
