import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'

@Component({
  selector: 'app-editlibre',
  templateUrl: './editlibre.component.html',
  styleUrls: ['./editlibre.component.scss']
})
export class EditlibreComponent implements OnInit{
  editlibreform:FormGroup
  parcelID:any
  libre: any
  constructor(
    private activeRoute:ActivatedRoute,
    private ruteador:Router,
    private crudservice:CrudService,
    public form:FormBuilder,
    
  ){
    this.parcelID = this.activeRoute.snapshot.paramMap.get('id')
    this.editlibreform = this.form.group({
      id_parcela:'',
      id_parcela_og:'',
      valor:''
    })
  }

  
  ngOnInit(): void {
    this.crudservice.listlibre(this.parcelID).subscribe(respuesta=>{
      this.libre = respuesta[0]
      this.editlibreform.setValue({
        id_parcela:this.libre.id_parcela,
        id_parcela_og:this.libre.id_parcela_og,
        valor:this.libre.valor
      })
      
    } )
  }
  editlibre():any{
    this.crudservice.editparcelalibre((this.editlibreform.value)).subscribe(
      respuesta=>{ console.log(respuesta)
        if (respuesta.success == 1) {
          this.ruteador.navigateByUrl("/")
        }
      } 
    );
  }



}
