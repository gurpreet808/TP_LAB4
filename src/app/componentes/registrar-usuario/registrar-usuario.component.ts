import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  public registerForm: FormGroup;
  public registrado: boolean;

  nombrehint(){
    if (!this.registerForm.controls['nombre'].valid) {
      return "Dato obligatorio";
    }
  }
  apellidohint(){
    if (!this.registerForm.controls['apellido'].valid) {
      return "Dato obligatorio";
    }
  }
  emailhint(){
    if (!this.registerForm.controls['email'].valid) {
      return "Dato obligatorio, con el formato nombre@dominio.com";
    }
  }
  passhint(){
    if (!this.registerForm.controls['pass'].valid) {
      return "Dato obligatorio";
    }

    if(this.registerForm.controls['pass'].value != this.registerForm.controls['pass2'].value){
      return "No coinciden las contraseñas ingresadas";
    }
    
    return "";
  }
  pass2hint(){
    if (!this.registerForm.controls['pass2'].valid) {
      return "Dato obligatorio";
    }

    if(this.registerForm.controls['pass'].value != this.registerForm.controls['pass2'].value){
      return "No coinciden las contraseñas ingresadas";
    }
    
    return "";
  }
  
  constructor(private formBuilder: FormBuilder, public servUsr: UsuarioService) {
    
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      apellido: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      pass: ['', Validators.compose([Validators.maxLength(12), Validators.required])],
      pass2: ['', Validators.compose([Validators.maxLength(12), Validators.required])]
    });

  }
  
  ngOnInit() {

  }
  
  registrar(){
    this.servUsr.registrar({
      nombre: this.registerForm.value.nombre,
      apellido: this.registerForm.value.apellido,
      email: this.registerForm.value.email,
      clave: this.registerForm.value.pass,
      tipo: "cliente"
    });

    this.servUsr.registrado.subscribe(
      data =>{
        if(data){
          this.registrado = true;
          this.registerForm.disable();
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}