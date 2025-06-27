import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { AuthComponent } from './auth.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
  ],
  declarations: [

  ]
})
export class AuthModule {
}
