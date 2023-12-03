import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { parcela_vendida } from './parcela_vendida';
import { parcela_reseravada } from './parcela_reservada';
import {propietario} from './propietario'
import { parcela_libre } from './parcela_libre';
import { parcela_comunitaria } from './parcela_comunitaria';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

API: string= 'http://localhost/CRUD/'
  constructor( private clientHttp:HttpClient) {}

  listarParcelaVendida (){
    return this.clientHttp.get(this.API+"?list-vendidas=1")
  }
  listarParcelaReservada (){
    return this.clientHttp.get(this.API+"?list-reservadas=1")
  }
  listarParcelaLibre (){
    return this.clientHttp.get(this.API+"?list-libres=1")
  }
  listarParcelaComunitaria(){
    return this.clientHttp.get(this.API+"?list-comunitarias=1")
  }
  listarPropietario(){
    return this.clientHttp.get(this.API+"?list-propietarios=1")
  }
  borrarParcela(id:any):Observable <any> {
    return this.clientHttp.get(this.API+"?borrar="+id );
  }
  addParcelaVendida(datosParcela : parcela_vendida):Observable <any> {
    return this.clientHttp.post(this.API+"?add-vendida=1",datosParcela);
  }
  listVendida(id:any):Observable <any> {

    return this.clientHttp.get(this.API+"?vendida="+id );
  }
  editparcelavendida(datosParcela : parcela_vendida):Observable <any> {
    return this.clientHttp.post(this.API+"?edit-vendida=1",datosParcela);
  }
  addParcelaReservada(datosParcela : parcela_reseravada):Observable <any> {

    return this.clientHttp.post(this.API+"?add-reservada=1",datosParcela);
  }
  addpropietario(propietario : propietario):Observable <any> {
    return this.clientHttp.post(this.API+"?add-propietario=1",propietario);
  }
  getpropietario(cuit:any) :Observable <any> {
    return this.clientHttp.get(this.API+"?get-propietario="+cuit )
  }
  editpropietario(propietario : propietario):Observable <any> {
    return this.clientHttp.post(this.API+"?edit-propietario=1",propietario);
  }
  listreservada(id:any):Observable <any> {
    return  this.clientHttp.get(this.API+"?get-reservada="+id );
  }
  editreservada(datosParcela : parcela_reseravada):Observable <any> {
    return this.clientHttp.post(this.API+"?edit-reservada=1",datosParcela);
  }
  addlibre(libre : parcela_libre):Observable <any> {
    return this.clientHttp.post(this.API+"?add-libre=1",libre);
  }
  listlibre(id:any):Observable <any> {
    return  this.clientHttp.get(this.API+"?get-libre="+id );
  }
  editparcelalibre(libre : parcela_libre):Observable <any> {
    return this.clientHttp.post(this.API+"?edit-libre=1",libre)
  }
  addcomunitaria(comunitaria : parcela_comunitaria ):Observable <any> {
    return this.clientHttp.post(this.API+"?add-comunitaria=1",comunitaria);
  }
  listcomunitaria(id:any):Observable <any> {
    return  this.clientHttp.get(this.API+"?get-comunitaria="+id );
  }
  editparcelacomunitaria(comunitaria : parcela_comunitaria ):Observable <any> {
    return this.clientHttp.post(this.API+"?edit-comunitaria=1",comunitaria)
  }
}

