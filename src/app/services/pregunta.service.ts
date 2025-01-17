import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  public url;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  //PRUEBA GRATIS
  obtener_preguntas_prueba_gratis(): Observable<any> {
    return this._http.get(this.url + 'obtener_preguntas_prueba_gratis');
  }

  //EXAMEN
  obtener_preguntas_examen(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_examen', {headers : headers});
  }

  //Álgebra
  agregar_pregunta_algebra(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_algebra', data, {headers : headers});
  }

  listar_preguntas_filtro_algebra(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_algebra/'+filtro, {headers : headers});
  }

  obtener_pregunta_algebra(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_algebra/' + id, {headers : headers});
  }

  actualizar_pregunta_algebra(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_algebra/' + id, data, {headers : headers});
  }

  eliminar_pregunta_algebra(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_algebra/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_algebra(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_algebra', {headers : headers});
  }

  //Anatomía
  agregar_pregunta_anatomia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_anatomia', data, {headers : headers});
  }

  listar_preguntas_filtro_anatomia(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_anatomia/'+filtro, {headers : headers});
  }

  obtener_pregunta_anatomia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_anatomia/' + id, {headers : headers});
  }

  actualizar_pregunta_anatomia(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_anatomia/' + id, data, {headers : headers});
  }

  eliminar_pregunta_anatomia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_anatomia/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_anatomia(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_anatomia', {headers : headers});
  }

  //Aritmética
  agregar_pregunta_aritmetica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_aritmetica', data, {headers : headers});
  }

  listar_preguntas_filtro_aritmetica(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_aritmetica/'+filtro, {headers : headers});
  }

  obtener_pregunta_aritmetica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_aritmetica/' + id, {headers : headers});
  }

  actualizar_pregunta_aritmetica(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_aritmetica/' + id, data, {headers : headers});
  }

  eliminar_pregunta_aritmetica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_aritmetica/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_aritmetica(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_aritmetica', {headers : headers});
  }

  //Biología
  agregar_pregunta_biologia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_biologia', data, {headers : headers});
  }

  listar_preguntas_filtro_biologia(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_biologia/'+filtro, {headers : headers});
  }

  obtener_pregunta_biologia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_biologia/' + id, {headers : headers});
  }

  actualizar_pregunta_biologia(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_biologia/' + id, data, {headers : headers});
  }

  eliminar_pregunta_biologia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_biologia/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_biologia(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_biologia', {headers : headers});
  }

  //Economía
  agregar_pregunta_economia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_economia', data, {headers : headers});
  }

  listar_preguntas_filtro_economia(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_economia/'+filtro, {headers : headers});
  }

  obtener_pregunta_economia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_economia/' + id, {headers : headers});
  }

  actualizar_pregunta_economia(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_economia/' + id, data, {headers : headers});
  }

  eliminar_pregunta_economia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_economia/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_economia(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_economia', {headers : headers});
  }

  //Educación Cívica
  agregar_pregunta_ed_civica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_ed_civica', data, {headers : headers});
  }

  listar_preguntas_filtro_ed_civica(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_ed_civica/'+filtro, {headers : headers});
  }

  obtener_pregunta_ed_civica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_ed_civica/' + id, {headers : headers});
  }

  actualizar_pregunta_ed_civica(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_ed_civica/' + id, data, {headers : headers});
  }

  eliminar_pregunta_ed_civica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_ed_civica/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_ed_civica(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_ed_civica', {headers : headers});
  }

  //Física
  agregar_pregunta_fisica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_fisica', data, {headers : headers});
  }

  listar_preguntas_filtro_fisica(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_fisica/'+filtro, {headers : headers});
  }

  obtener_pregunta_fisica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_fisica/' + id, {headers : headers});
  }

  actualizar_pregunta_fisica(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_fisica/' + id, data, {headers : headers});
  }

  eliminar_pregunta_fisica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_fisica/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_fisica(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_fisica', {headers : headers});
  }

  //Geografía
  agregar_pregunta_geografia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_geografia', data, {headers : headers});
  }

  listar_preguntas_filtro_geografia(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_geografia/'+filtro, {headers : headers});
  }

  obtener_pregunta_geografia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_geografia/' + id, {headers : headers});
  }

  actualizar_pregunta_geografia(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_geografia/' + id, data, {headers : headers});
  }

  eliminar_pregunta_geografia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_geografia/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_geografia(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_geografia', {headers : headers});
  }

  //Geometría
  agregar_pregunta_geometria(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_geometria', data, {headers : headers});
  }

  listar_preguntas_filtro_geometria(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_geometria/'+filtro, {headers : headers});
  }

  obtener_pregunta_geometria(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_geometria/' + id, {headers : headers});
  }

  actualizar_pregunta_geometria(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_geometria/' + id, data, {headers : headers});
  }

  eliminar_pregunta_geometria(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_geometria/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_geometria(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_geometria', {headers : headers});
  }

  //Historia del Perú
  agregar_pregunta_historia_peru(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_historia_peru', data, {headers : headers});
  }

  listar_preguntas_filtro_historia_peru(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_historia_peru/'+filtro, {headers : headers});
  }

  obtener_pregunta_historia_peru(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_historia_peru/' + id, {headers : headers});
  }

  actualizar_pregunta_historia_peru(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_historia_peru/' + id, data, {headers : headers});
  }

  eliminar_pregunta_historia_peru(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_historia_peru/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_historia_peru(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_historia_peru', {headers : headers});
  }

  //Historia Universal
  agregar_pregunta_historia_universal(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_historia_universal', data, {headers : headers});
  }

  listar_preguntas_filtro_historia_universal(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_historia_universal/'+filtro, {headers : headers});
  }

  obtener_pregunta_historia_universal(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_historia_universal/' + id, {headers : headers});
  }

  actualizar_pregunta_historia_universal(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_historia_universal/' + id, data, {headers : headers});
  }

  eliminar_pregunta_historia_universal(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_historia_universal/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_historia_universal(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_historia_universal', {headers : headers});
  }

  //Lenguaje
  agregar_pregunta_lenguaje(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_lenguaje', data, {headers : headers});
  }

  listar_preguntas_filtro_lenguaje(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_lenguaje/'+filtro, {headers : headers});
  }

  obtener_pregunta_lenguaje(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_lenguaje/' + id, {headers : headers});
  }

  actualizar_pregunta_lenguaje(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_lenguaje/' + id, data, {headers : headers});
  }

  eliminar_pregunta_lenguaje(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_lenguaje/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_lenguaje(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_lenguaje', {headers : headers});
  }

  //Literatura
  agregar_pregunta_literatura(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_literatura', data, {headers : headers});
  }

  listar_preguntas_filtro_literatura(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_literatura/'+filtro, {headers : headers});
  }

  obtener_pregunta_literatura(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_literatura/' + id, {headers : headers});
  }

  actualizar_pregunta_literatura(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_literatura/' + id, data, {headers : headers});
  }

  eliminar_pregunta_literatura(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_literatura/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_literatura(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_literatura', {headers : headers});
  }

  //Química
  agregar_pregunta_quimica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_quimica', data, {headers : headers});
  }

  listar_preguntas_filtro_quimica(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_quimica/'+filtro, {headers : headers});
  }

  obtener_pregunta_quimica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_quimica/' + id, {headers : headers});
  }

  actualizar_pregunta_quimica(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_quimica/' + id, data, {headers : headers});
  }

  eliminar_pregunta_quimica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_quimica/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_quimica(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_quimica', {headers : headers});
  }

  //Razonamiento Matemático
  agregar_pregunta_raz_matematico(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_raz_matematico', data, {headers : headers});
  }

  listar_preguntas_filtro_raz_matematico(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_raz_matematico/'+filtro, {headers : headers});
  }

  obtener_pregunta_raz_matematico(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_raz_matematico/' + id, {headers : headers});
  }

  actualizar_pregunta_raz_matematico(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_raz_matematico/' + id, data, {headers : headers});
  }

  eliminar_pregunta_raz_matematico(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_raz_matematico/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_raz_matematico(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_raz_matematico', {headers : headers});
  }

  //Razonamiento Verbal
  agregar_pregunta_raz_verbal(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_raz_verbal', data, {headers : headers});
  }

  listar_preguntas_filtro_raz_verbal(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_raz_verbal/'+filtro, {headers : headers});
  }

  obtener_pregunta_raz_verbal(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_raz_verbal/' + id, {headers : headers});
  }

  actualizar_pregunta_raz_verbal(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_raz_verbal/' + id, data, {headers : headers});
  }

  eliminar_pregunta_raz_verbal(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_raz_verbal/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_raz_verbal(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_raz_verbal', {headers : headers});
  }

  //Trigonometría
  agregar_pregunta_trigonometria(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_trigonometria', data, {headers : headers});
  }

  listar_preguntas_filtro_trigonometria(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_trigonometria/'+filtro, {headers : headers});
  }

  obtener_pregunta_trigonometria(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_trigonometria/' + id, {headers : headers});
  }

  actualizar_pregunta_trigonometria(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_trigonometria/' + id, data, {headers : headers});
  }

  eliminar_pregunta_trigonometria(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_trigonometria/' + id, {headers : headers});
  }

  //Prácticas
  obtener_preguntas_practica_trigonometria(token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_preguntas_practica_trigonometria', {headers : headers});
  }
}
