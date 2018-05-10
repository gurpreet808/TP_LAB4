import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  userform: FormGroup;
  
  submitted: boolean = false;

  @Output() logueado:EventEmitter <any> = new EventEmitter <any>();
  
  constructor(private fb: FormBuilder) {}
  
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
    this.logueado.emit(this.userform.value);
    console.log(this.userform.value);
  }
  
  get diagnostic() { return JSON.stringify(this.userform.value); }
}