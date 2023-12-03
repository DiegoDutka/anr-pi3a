import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'

@Component({
  selector: 'app-edit-parcel',
  templateUrl: './edit-parcel.component.html',
  styleUrls: ['./edit-parcel.component.scss']
})
export class EditParcelComponent implements OnInit{
  parcelID:any
  propietario: any
  escritura: any
  vendido:any
  editvendido: FormGroup
  constructor (
    private activeRoute:ActivatedRoute,
    private ruteador:Router,
    private crudservice:CrudService,
    public form:FormBuilder,
  ){
    this.parcelID = this.activeRoute.snapshot.paramMap.get('id')

    this.editvendido= this.form.group({
      idParcela:[this.vendido],
      idOG:[''],
      nroPartida:[''],
      nroboleto:[''],
      anioBoleto:[''],
      fechaBoleto:[''],
      escritura:[''],
      nroExpediente:[''],
      anioExpediente:[''],
      CUIT:[11111111111],
      

    })
    
  }
ngOnInit():void{
  this.crudservice.listarPropietario().subscribe(respuesta=>{
    this.propietario = respuesta
    
  } )
  this.crudservice.listVendida(this.parcelID).subscribe(respuesta=>{
    console.log(respuesta[0])
    
    if (respuesta) {
      this.vendido=respuesta
      if(this.vendido[0].escritura == 't'){this.escritura = true}
      else{this.escritura=false}
      this.editvendido.setValue(
        {
          idParcela:this.vendido[0].id_parcela,
          idOG:this.vendido[0].id_parcela_og,
          nroPartida:this.vendido[0].nro_partida,
          nroboleto:this.vendido[0].nro_boleto_compra_venta,
          anioBoleto:this.vendido[0].anio_boleto_compra_venta,
          fechaBoleto:this.vendido[0].fecha_boleto,
          escritura:this.escritura,
          nroExpediente:this.vendido[0].nro_expediente,
          anioExpediente:this.vendido[0].anio_expediente,
          CUIT:this.vendido[0].cuit,
        }
      )
    }

  })
}
editparcelavendida () : any{
  this.crudservice.editparcelavendida((this.editvendido.value)).subscribe(
    respuesta=>{ 
      if (respuesta.success == 1) {
        this.ruteador.navigateByUrl("/")
      }
    } 
  );
}

}
