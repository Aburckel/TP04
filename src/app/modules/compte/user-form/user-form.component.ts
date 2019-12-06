import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  genders = ['Male', 'Female', 'Other'];

  countries = ['France', 'Germany', 'Spain', 'Russia', 'Italy', 'Sweden'];

  onSubmit() {

  }
  constructor(private formBuilder: FormBuilder) {
      this.userForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      login: '',
      password: '',
      ville:'',
      cp:'',
      adresse: '',
      email: '',
      tel:'',
      pays:''
    });
 }

  ngOnInit() {
  }

}