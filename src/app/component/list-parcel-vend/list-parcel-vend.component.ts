import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-parcel-vend',
  templateUrl: './list-parcel-vend.component.html',
  styleUrls: ['./list-parcel-vend.component.scss']
})
export class ListParcelVendComponent {
  parcelaVendida: any
  constructor(private crudservice:CrudService,private ruteador:Router) { }
ngOnInit():void{
  this.crudservice.listarParcelaVendida().subscribe(respuesta=>{
    this.parcelaVendida = respuesta
  } )
}
borraParcela(id:any ){
  this.crudservice.borrarParcela(id).subscribe(respuesta=>{
    console.log(respuesta)
    if (respuesta = 1) {
      window.location.reload()
    }

  } )
  

}

}
