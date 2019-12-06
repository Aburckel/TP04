import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { CompteRoutingModule } from './compte.routing.module';
import { InputErrorDirective } from './user-form/input-error.directive';
import { PhoneNumberPipe } from './user-form/phone-number.pipe';

@NgModule({
  imports: [
    CommonModule,
    CompteRoutingModule, 
    FormsModule
  ],
  declarations: [
    UserFormComponent,
    InputErrorDirective,
    PhoneNumberPipe
    ]
})
export class CompteModule { }