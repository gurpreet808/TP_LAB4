import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  loginForm: FormGroup;
  
  submitted: boolean = false;
  
  constructor(private fb: FormBuilder, private servicioUsuario: UsuarioService, public router:Router) {}
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': new FormControl('', Validators.required),
      'clave': new FormControl('', Validators.compose([Validators.required])),
    });
  }
  
  onSubmit(value: string) {
    this.submitted = true;
    //this.msgs = [];
    //this.msgs.push({severity:'success', summary:'Éxito', detail:'Se enviaron sus datos'});
    var usuarioSesion = this.loginForm.value;
    //console.log(usuario);

    this.servicioUsuario.loguearUsuario(usuarioSesion)
    .subscribe(
      (respBody) => {
        console.log(respBody);
        localStorage.setItem("token", respBody["token"]);
        this.servicioUsuario.token = respBody["token"];
        this.servicioUsuario.decodificarToken();
        this.servicioUsuario.logged = true;
        this.navegar("");
      }
    );
  }
  
  get diagnostic() { return JSON.stringify(this.loginForm.value); }

  navegar(url: string) {
    this.router.navigateByUrl("/"+url);
  }
}