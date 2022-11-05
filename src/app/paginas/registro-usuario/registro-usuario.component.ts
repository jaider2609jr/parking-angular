import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  registerUser: FormGroup;
  constructor() { }

  createForm(): void {
    this.registerUser = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      pnombre: new FormControl('', Validators.required),
      papellido: new FormControl('', Validators.required),
      sapellido: new FormControl('', Validators.required),
      correo : new FormControl('', [Validators.required, Validators.email]),
      tid : new FormControl('', Validators.required),
      nid : new FormControl('', [Validators.required, Validators.min(99999)]),
    });

  }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(form:any): void {
    console.log(form);
  }

}
