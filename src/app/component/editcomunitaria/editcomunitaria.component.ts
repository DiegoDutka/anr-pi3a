import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'

@Component({
  selector: 'app-editcomunitaria',
  templateUrl: './editcomunitaria.component.html',
  styleUrls: ['./editcomunitaria.component.scss']
})
export class EditcomunitariaComponent implements OnInit {

  editcomunitariaform:FormGroup
  parcelID:any
  libre: any
  constructor(
    private activeRoute:ActivatedRoute,
    private ruteador:Router,
    private crudservice:CrudService,
    public form:FormBuilder,
    
  ){
    this.parcelID = this.activeRoute.snapshot.paramMap.get('id')
    this.editcomunitariaform = this.form.group({
      id_parcela:'',
      id_parcela_og:'',
      descripcion:''
    })
  }

  
  ngOnInit(): void {
    this.crudservice.listcomunitaria(this.parcelID).subscribe(respuesta=>{
      this.libre = respuesta[0]
      this.editcomunitariaform.setValue({
        id_parcela:this.libre.id_parcela,
        id_parcela_og:this.libre.id_parcela_og,
        descripcion:this.libre.descripcion
      })
      
    } )
  }
  editcomunitaria():any{
    this.crudservice.editparcelacomunitaria((this.editcomunitariaform.value)).subscribe(
      respuesta=>{ console.log(respuesta)
        if (respuesta.success == 1) {
          this.ruteador.navigateByUrl("/")
        }
      } 
    );
  }



}
