import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  userform: FormGroup;
  
  submitted: boolean = false;
  
  constructor(private fb: FormBuilder, private servicioUsuario: UsuarioService) {}
  
  ngOnInit() {
    this.userform = this.fb.group({
      'nombreUsuario': new FormControl('', Validators.required),
      'clave': new FormControl('', Validators.compose([Validators.required])),
    });
  }
  
  onSubmit(value: string) {
    this.submitted = true;
    //this.msgs = [];
    //this.msgs.push({severity:'success', summary:'Éxito', detail:'Se enviaron sus datos'});
    console.log(this.userform.value);
    this.servicioUsuario.logged = true;
  }
  
  get diagnostic() { return JSON.stringify(this.userform.value); }
}