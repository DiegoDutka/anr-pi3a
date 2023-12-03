import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-parcel-comuni',
  templateUrl: './list-parcel-comuni.component.html',
  styleUrls: ['./list-parcel-comuni.component.scss']
})
export class ListParcelComuniComponent {
  parcelarComunitaria: any
  constructor(private crudservice:CrudService) { }
  ngOnInit():void{
    this.crudservice.listarParcelaComunitaria().subscribe(respuesta=>{
      console.log(respuesta)
      this.parcelarComunitaria = respuesta
    } )
  }
  borraParcela(id: any) {
    this.crudservice.borrarParcela(id).subscribe(respuesta => {
      console.log(respuesta)
      if (respuesta = 1) {
        window.location.reload()
      }
    })
  }
}
