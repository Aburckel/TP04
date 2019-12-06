import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { CompteRoutingModule } from './compte.routing.module';


@NgModule({
  imports: [
    CommonModule,
    CompteRoutingModule, 
    FormsModule
  ],
  declarations: [
    UserFormComponent,
  ]
})
export class CompteModule { }