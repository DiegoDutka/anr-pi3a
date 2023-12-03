import { Component } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-parcel-reserv',
  templateUrl: './add-parcel-reserv.component.html',
  styleUrls: ['./add-parcel-reserv.component.scss']
})

export class AddParcelReservComponent {
  formaddreservado: FormGroup
  constructor(
    private crudservice:CrudService, 
    public form:FormBuilder,
    private ruteador:Router) { 
    this.formaddreservado= this.form.group({
      id_parcela:[''],
      id_parcela_og:[''],
      nro_solicitud_reserva	:[''],
      responsable_reserva:[''],
      fecha_caducidad_reserva:[''],
      Bandaforestal:"false",
      alambradoperimetral:"false",
      construccion:"false",

    })
}
addreservada () : any{
  console.log(this.formaddreservado.value);
  this.crudservice.addParcelaReservada((this.formaddreservado.value)).subscribe(
    respuesta=>{  
      if (respuesta.success == 1) {  
        this.ruteador.navigateByUrl("/")
      }
    } 
  );
};

}
