import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent {

  @Input() currentLanguage: string = 'es';  // Recibe el idioma actual desde el componente principal
  profileForm!: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {
    this.iniciarFormulario();
  }

  private iniciarFormulario() {
    this.profileForm = this.fb.group({
      nombre: ['', Validators.required],
      numero: [0, Validators.required],
      porcentaje: [0, Validators.required],
      dinero: [0, Validators.required],
      fecha: [new Date(), Validators.required],
      hora: ['12:00', Validators.required],
      otroCampo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: [''],
      telefono: [''],
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
