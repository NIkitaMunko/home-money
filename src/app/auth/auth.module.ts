import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    AuthRoutingModule,
    SharedModule,
  ],
  declarations: []
})
export class AuthModule {
}
