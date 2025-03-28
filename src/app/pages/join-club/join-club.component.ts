import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-club',
  imports: [ReactiveFormsModule],
  templateUrl: './join-club.component.html',
  styleUrl: './join-club.component.css'
})
export class JoinClubComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      character: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      alert(`Formulario enviado: ${this.formulario.value}`)
    } else {
      this.formulario.markAllAsTouched(); // Muestra errores si intentan enviar vacío
    }
  }

  campoEsInvalido(campo: string): any {
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched!;
  }
}
