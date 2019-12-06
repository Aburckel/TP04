import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  id = 0;

  genders = ['Male', 'Female', 'Other'];

  countries = ['France', 'Germany', 'Spain', 'Russia', 'Italy', 'Sweden'];

  onSubmit() {

  }
  constructor() { }

  ngOnInit() {
  }

}