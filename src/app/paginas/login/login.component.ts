import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser!: FormGroup;
  constructor() { }

  createForm(): void {
    this.loginUser = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }


  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(form:any): void {
    console.log('username: ' + form.username);
    console.log('password: ' + form.password);
  }

}
