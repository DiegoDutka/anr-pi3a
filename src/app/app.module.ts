import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListParcelVendComponent } from './component/list-parcel-vend/list-parcel-vend.component';
import { ListParcelReservComponent } from './component/list-parcel-reserv/list-parcel-reserv.component';
import { ListParcelLibreComponent } from './component/list-parcel-libre/list-parcel-libre.component';
import { ListParcelComuniComponent } from './component/list-parcel-comuni/list-parcel-comuni.component';
import { AddParcelComuniComponent } from './component/add-parcel-comuni/add-parcel-comuni.component';
import { AddParcelLibreComponent } from './component/add-parcel-libre/add-parcel-libre.component';
import { AddParcelReservComponent } from './component/add-parcel-reserv/add-parcel-reserv.component';
import { AddParcelVendComponent } from './component/add-parcel-vend/add-parcel-vend.component';
import { AddPropietarioComponent } from './component/add-propietario/add-propietario.component';
import { EditParcelComponent } from './component/edit-parcel/edit-parcel.component';
import { EditreservadaComponent } from './component/editreservada/editreservada.component';
import { EditlibreComponent } from './component/editlibre/editlibre.component';
import { EditcomunitariaComponent } from './component/editcomunitaria/editcomunitaria.component';


@NgModule({
  declarations: [
    AppComponent,
    ListParcelVendComponent,
    ListParcelReservComponent,
    ListParcelLibreComponent,
    ListParcelComuniComponent,
    AddParcelComuniComponent,
    AddParcelLibreComponent,
    AddParcelReservComponent,
    AddParcelVendComponent,
    AddPropietarioComponent,
    EditParcelComponent,
    EditreservadaComponent,
    EditlibreComponent,
    EditcomunitariaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
