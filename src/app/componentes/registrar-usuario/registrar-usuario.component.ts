import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  userform: FormGroup;
  
  submitted: boolean;
  
  sexos: SelectItem[];
  
  description: string;
  
  @Input() loggedin: boolean;  
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.userform = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'nombreUsuario': new FormControl('', Validators.required),
      'clave': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'clave2': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'descripcion': new FormControl(''),
      'sexo': new FormControl('', Validators.required)
    });
    
    this.sexos = [];
    this.sexos.push({label:'Seleccione su sexo', value:''});
    this.sexos.push({label:'Hombre', value:'Hombre'});
    this.sexos.push({label:'Mujer', value:'Mujer'});
  }
  
  onSubmit(value: string) {
    this.submitted = true;
    //this.msgs = [];
    //this.msgs.push({severity:'success', summary:'Éxito', detail:'Se enviaron sus datos'});
    this.loggedin = true;
  }
  
  get diagnostic() { return JSON.stringify(this.userform.value); }
}