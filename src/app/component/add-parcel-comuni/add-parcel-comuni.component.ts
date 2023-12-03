import { Component } from '@angular/core';
import { Router,  } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'
@Component({
  selector: 'app-add-parcel-comuni',
  templateUrl: './add-parcel-comuni.component.html',
  styleUrls: ['./add-parcel-comuni.component.scss']
})
export class AddParcelComuniComponent {
  comunitariaform :FormGroup
  constructor(
    public form: FormBuilder,
    private crudservice : CrudService,
    private ruteador:Router
    
  ){
    this.comunitariaform = this.form.group({
      id_parcela:'',
      id_parcela_og:'',
      descripcion:''
    })
  }
  addcomunitaria():any{
    this.crudservice.addcomunitaria((this.comunitariaform.value)).subscribe(
      respuesta=>{  
        if (respuesta.success == 1) {  
          this.ruteador.navigateByUrl("/")
        }
      } 
    );
  }
  }
