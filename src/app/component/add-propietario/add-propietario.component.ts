import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import {FormGroup, FormBuilder} from  '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-propietario',
  templateUrl: './add-propietario.component.html',
  styleUrls: ['./add-propietario.component.scss']
})
export class AddPropietarioComponent {
  formpropietario: FormGroup
  propietario: any
  doEdit:any 
  constructor(
    public form:FormBuilder,
    private crudservice:CrudService,
    private ruteador:Router
  ){
    this.doEdit = false
      this.formpropietario = this.form.group({
        cuit:null,
        razon_social:'',
        sitio_web:null,
        telefono_institucional:null,
        e_mail_institucional:null,
        representantes_legales:null,
        telefono_contacto:null,
        e_mail_contacto:null,
        cantidad_empleados: 0 ,
        fecha_inicio_act:null,
        id_actividad:null,
        estado:'',
        id_rubro:null
      })
  }
addpropietario ():any{
  console.log(this.formpropietario.value)
  this.crudservice.addpropietario((this.formpropietario.value)).subscribe(
    respuesta=>{
      console.log(respuesta)    
      if (respuesta.success == 1) {  
        this.ruteador.navigateByUrl("/")
      }
    } 
  );
}
getpropietario(cuitid:any){
  console.log(cuitid)
  this.crudservice.getpropietario(cuitid).subscribe(
    respuesta=>{   
      if (respuesta[0]) {  
          this.propietario = respuesta[0]
          this.doEdit = true
          this.formpropietario.setValue ({    
            cuit: this.propietario.cuit,
            razon_social:this.propietario.razon_social,
            sitio_web:this.propietario.sitio_web,
            telefono_institucional:this.propietario.telefono_institucional,
            e_mail_institucional:this.propietario.e_mail_institucional,
            representantes_legales:this.propietario.representantes_legales,
            telefono_contacto:this.propietario.telefono_contacto,
            e_mail_contacto:this.propietario.e_mail_contacto,
            cantidad_empleados: this.propietario.cantidad_empleados ,
            fecha_inicio_act: this.propietario.fecha_inicio_act,
            id_actividad:this.propietario.id_actividad,
            estado:this.propietario.estado,
            id_rubro:this.propietario.id_rubro
          })
      }
    } 
  );
}
editropietario(): any{
  this.crudservice.editpropietario((this.formpropietario.value)).subscribe(
    respuesta=>{
      if (respuesta.success == 1) {  
        window.location.reload()
      }
    } 
  );
}
actionDo(){
  if (this.doEdit ==true) {
    this.editropietario()}
    else{
      this.addpropietario()
    }
  }
}
