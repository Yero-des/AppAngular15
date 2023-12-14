import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  profileForm: FormGroup = new FormGroup({});
  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });
  idioma = 'es';

  constructor(private fb: FormBuilder) {
    this.iniciarFormulario();
  }

  private iniciarFormulario() {

    this.profileForm = this.fb.group({
      nombre: ['Capitan America', Validators.required],
      decimal: [Math.PI, Validators.required],
      porcentaje: [0.245, Validators.required],
      precio: [1234.5, Validators.required],
      fecha: ['2023-12-12T12:00', Validators.required],
    });
  }

}
