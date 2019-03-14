import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public estado: string;

  usuariosTest = [
    {email: "usuario1@usuario1.com", password: "usuario1"},
    {email: "usuario2@usuario2.com", password: "usuario2"},
    {email: "usuario3@usuario3.com", password: "usuario3"}
  ];
  
  constructor(public formBuilder: FormBuilder, public servUsr: UsuarioService, public snackBar: MatSnackBar) { 
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      contraseña: ['', Validators.compose([Validators.maxLength(12), Validators.required])],
    });
  }

  ngOnInit() {
  }

  login(){
    let email = this.loginForm.value.usuario;
    let clave = this.loginForm.value.contraseña;

    this.servUsr.login_observable(email, clave).subscribe(
      data =>{
        console.log(data);
        //EXTRAER token
        if(data["estado"]=="OK"){
          localStorage.setItem("token", data["token"]);
          this.servUsr.token = data["token"];
        
          //DECODIFICO token y asigno los datos a usuario
          this.servUsr.asignarDatosToken();
  
          //AVISAR que se logueó bien
          this.servUsr.logueado.next(true);

          this.snackBar.open(data["mensaje"], "OK");
          this.navegar("");
        } else {
          this.snackBar.open(data["mensaje"], "OK");
        }
      },
      err => {
        console.log(err);
        this.snackBar.open( err["error"]["mensaje"], "OK");
      }
    );

    /* this.servUsr.logueado.subscribe(
      logueo => {
        if(logueo){
          this.navegar("");
        }
      },
      err => {
        console.log(err);
      }
    ); */
  }

  navegar(url: string) {
    this.servUsr.router.navigateByUrl("/"+url);
  }

  elegirTest(id:number){
    this.loginForm.controls['usuario'].setValue(this.usuariosTest[id].email);
    this.loginForm.controls['contraseña'].setValue(this.usuariosTest[id].password);
  }

}
