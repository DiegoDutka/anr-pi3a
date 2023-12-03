import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editreservada',
  templateUrl: './editreservada.component.html',
  styleUrls: ['./editreservada.component.scss']
})
export class EditreservadaComponent {
  parcelaID:any
  reservada:any
  nBandaforestal:any
  nalambradoperimetral:any
  nconstruccion:any
  formeditreservado : FormGroup
  constructor( 
    private activeRoute:ActivatedRoute,
    private ruteador:Router,
    private crudservice:CrudService,
    public form:FormBuilder
    ){
      this.parcelaID = this.activeRoute.snapshot.paramMap.get('id')
      this.formeditreservado= this.form.group({
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
    ngOnInit():void{
      this.crudservice.listreservada(this.parcelaID).subscribe(respuesta=>{
        if(respuesta){
          this.reservada = respuesta[0]
          console.log(this.reservada)
          if(this.reservada.banda_forestal == "t"){this.nBandaforestal = true}else{this.nBandaforestal = false}
          if(this.reservada.alambrado_perimetral == "t"){this.nalambradoperimetral = true}else{this.nalambradoperimetral = false}
          if(this.reservada.construccion == "t"){this.nconstruccion = true}else{this.nconstruccion = false}
          this.formeditreservado.setValue({
            id_parcela:this.reservada.id_parcela,
            id_parcela_og:this.reservada.id_parcela_og,
            nro_solicitud_reserva	:this.reservada.nro_solicitud_reserva,
            responsable_reserva:this.reservada.responsable_reserva,
            fecha_caducidad_reserva:this.reservada.fecha_caducidad_reserva,
            Bandaforestal:(this.nBandaforestal).toString(),
            alambradoperimetral:(this.nalambradoperimetral).toString(),
            construccion:(this.nconstruccion).toString()
          })
        }
      })
    }
    editreservada(){
      this.crudservice.editreservada((this.formeditreservado.value)).subscribe(
        respuesta=>{ 
          if (respuesta.success == 1) {
            this.ruteador.navigateByUrl("/")
          }
        } 
      );
    }
}
