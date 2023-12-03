import { Component } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-parcel-vend',
  templateUrl: './add-parcel-vend.component.html',
  styleUrls: ['./add-parcel-vend.component.scss']
})
export class AddParcelVendComponent {
  propietario: any
  formaddvendido: FormGroup
  constructor(
    private crudservice:CrudService, 
    public form:FormBuilder,
    private ruteador:Router) { 
    this.formaddvendido= this.form.group({
      idParcela:[''],
      idOG:[''],
      nroPartida:[''],
      nroboleto:[''],
      anioBoleto:[''],
      fechaBoleto:[''],
      escritura:[false],
      nroExpediente:[''],
      anioExpediente:[''],
      CUIT:[11111111111],
      

    })
  }
  ngOnInit():void{
    this.crudservice.listarPropietario().subscribe(respuesta=>{
      this.propietario = respuesta
      
    } )
  }
  addparcela () : any{
    this.crudservice.addParcelaVendida((this.formaddvendido.value)).subscribe(
      respuesta=>{
        console.log(respuesta)    
        if (respuesta = 1) {  
          this.ruteador.navigateByUrl("/")
        }
      } 
    );
  }
}
