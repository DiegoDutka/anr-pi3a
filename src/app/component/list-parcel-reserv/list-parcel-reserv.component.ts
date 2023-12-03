import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-list-parcel-reserv',
  templateUrl: './list-parcel-reserv.component.html',
  styleUrls: ['./list-parcel-reserv.component.scss']
})
export class ListParcelReservComponent {
  parcelarReservada: any
  constructor(private crudservice: CrudService) { }
  ngOnInit(): void {
    this.crudservice.listarParcelaReservada().subscribe(respuesta => {
      console.log(respuesta)
      this.parcelarReservada = respuesta
    })

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
