import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-parcel-libre',
  templateUrl: './list-parcel-libre.component.html',
  styleUrls: ['./list-parcel-libre.component.scss']
})
export class ListParcelLibreComponent {
  constructor(private crudservice:CrudService) { }
  parcelarLibre: any
ngOnInit():void{
  this.crudservice.listarParcelaLibre().subscribe(respuesta=>{
    console.log(respuesta)
    this.parcelarLibre = respuesta
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

