import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListParcelVendComponent } from './component/list-parcel-vend/list-parcel-vend.component';
import { ListParcelReservComponent } from './component/list-parcel-reserv/list-parcel-reserv.component';
import { ListParcelLibreComponent } from './component/list-parcel-libre/list-parcel-libre.component';
import { ListParcelComuniComponent } from './component/list-parcel-comuni/list-parcel-comuni.component';
import { AddParcelVendComponent } from './component/add-parcel-vend/add-parcel-vend.component';
import { AddParcelReservComponent } from './component/add-parcel-reserv/add-parcel-reserv.component';
import { AddParcelLibreComponent } from './component/add-parcel-libre/add-parcel-libre.component';
import { AddParcelComuniComponent } from './component/add-parcel-comuni/add-parcel-comuni.component';
import { AddPropietarioComponent } from './component/add-propietario/add-propietario.component';
import { EditParcelComponent } from './component/edit-parcel/edit-parcel.component';
import { EditreservadaComponent } from './component/editreservada/editreservada.component';
import { EditlibreComponent } from './component/editlibre/editlibre.component';
import { EditcomunitariaComponent } from './component/editcomunitaria/editcomunitaria.component';


const routes: Routes = [
  {path: '' , pathMatch:'full', redirectTo:'vendida', } ,
  {path:'vendida', component: ListParcelVendComponent, },
  {path:'reservada', component: ListParcelReservComponent},
  {path:'libre', component: ListParcelLibreComponent},
  {path:'comunitaria', component: ListParcelComuniComponent},
  {path:'addvendido', component: AddParcelVendComponent, outlet:'add'},
  {path:'addreservada', component: AddParcelReservComponent, outlet:'add'},
  {path:'addlibre', component: AddParcelLibreComponent, outlet:'add'},
  {path:'addcomunitaria', component: AddParcelComuniComponent, outlet:'add'},
  {path:'addpropietario', component: AddPropietarioComponent, outlet:'add'},
  {path:'vendida/edit/:id', component: EditParcelComponent},
  {path:'reservada/edit/:id', component: EditreservadaComponent},
  {path:'libre/edit/:id', component: EditlibreComponent},
  {path:'comunitaria/edit/:id', component: EditcomunitariaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
