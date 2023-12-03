import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'

@Component({
  selector: 'app-add-parcel-libre',
  templateUrl: './add-parcel-libre.component.html',
  styleUrls: ['./add-parcel-libre.component.scss']
})
export class AddParcelLibreComponent implements OnInit{
  libreform:FormGroup
  constructor(
    public form: FormBuilder,
    private crudservice : CrudService,
    private ruteador:Router
    
  ){
    this.libreform = this.form.group({
      id_parcela:'',
      id_parcela_og:'',
      valor:''
    })
  }
  addlibre():any{
    this.crudservice.addlibre((this.libreform.value)).subscribe(
      respuesta=>{  
        if (respuesta.success == 1) {  
          this.ruteador.navigateByUrl("/")
        }
      } 
    );
  }
  
  
  ngOnInit(): void {
  }




}