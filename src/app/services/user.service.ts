import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  //ADMIN
  listar_usuarios_filtro_admin(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'listar_usuarios_filtro_admin/' + filtro, { headers: headers });
  }

  obtener_user_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_user_admin/' + id, { headers: headers });
  }

  actualizar_user_admin(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'actualizar_user_admin/' + id, data, { headers: headers });
  }

  eliminar_user_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.delete(this.url + 'eliminar_user_admin/' + id, { headers: headers });
  }

  actualizar_user(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'actualizar_user/' + id, data, { headers: headers });
  }

  registrar_codigo_referido(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'registrar_codigo_referido/' + id, {data: true}, { headers: headers });
  }

  verificar_codigo_referido(codigo: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'verificar_codigo_referido/' + codigo, { headers: headers });
  }

  eliminar_user(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.delete(this.url + 'eliminar_user/' + id, { headers: headers });
  }

  comparar_password(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'comparar_password', data, { headers: headers });
  }

  actualizar_password_user(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'actualizar_password_user/' + id, data, { headers: headers });
  }

  //USER
  registro_user(data: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + 'registro_user', data, { headers: headers });
  }

  enviar_correo_confirmacion(id: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get(this.url + 'enviar_correo_confirmacion/' + id, { headers: headers });
  }

  actualizar_user_verificado(id: any, codigo: any): Observable<any> {
    return this._http.put(this.url + 'actualizar_user_verificado/' + id + '/' + codigo, { data: true });
  }

  registro_token_cambio_pass(data: any): Observable<any> {
    return this._http.put(this.url + 'registro_token_cambio_pass', data);
  }

  enviar_correo_token_cambio_pass(correo: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get(this.url + 'enviar_correo_token_cambio_pass/' + correo, { headers: headers });
  }

  verificar_token_cambio_pass(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get(this.url + 'verificar_token_cambio_pass/' + token, { headers: headers });
  }

  cambiar_password_user(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(this.url + 'cambiar_password_user/' + token, data, { headers: headers });
  }

  login_user(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login_user', data, { headers: headers });
  }

  public isAutenticatedUser(): Boolean {

    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(<any>token);

      if (helper.isTokenExpired(token)) {
        localStorage.clear();
        return false;
      }

      if (!decodedToken) {
        //console.log('No es valido');
        localStorage.clear();
        return false;
      }
    } catch (error) {
      localStorage.clear();
      return false;
    }

    return true;
  }

  public isAutenticatedAdmin(): Boolean {

    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(<any>token);

      if (helper.isTokenExpired(token)) {
        localStorage.clear();
        return false;
      }

      if (!decodedToken) {
        //console.log('No es valido');
        localStorage.clear();
        return false;
      }

      if (decodedToken.role !== 'ADMIN') {
        return false;
      }

    } catch (error) {
      localStorage.clear();
      return false;
    }

    if (decodedToken.role == 'ADMIN') {
      return true;
    }

    return true;
  }

  //PAGOS
  registro_reservacion_cliente(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_reservacion_cliente', data, { headers: headers });
  }

  obtener_pagos_cliente(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_pagos_cliente/' + id, { headers: headers });
  }

  obtener_pagos_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_pagos_admin', { headers: headers });
  }

  obtener_pago_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_pago_admin/' + id, { headers: headers });
  }

  actualizar_pago_confirmado(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'actualizar_pago_confirmado/' + id, { data: true }, { headers: headers });
  }

  obtener_user(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_user/' + id, { headers: headers });
  }

  //CORREOS DE PAGOS
  enviar_correo_reservacion_cliente(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'enviar_correo_reservacion_cliente/' + id, { headers: headers });
  }

  enviar_correo_confirmacion_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'enviar_correo_confirmacion_admin/' + id, { headers: headers });
  }

  //Cuentas
  registro_cuenta_admin(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_cuenta_admin', data, { headers: headers });
  }

  obtener_cuenta_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_cuenta_admin/' + id, { headers: headers });
  }

  obtener_cuentas_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_cuentas_admin', { headers: headers });
  }

  eliminar_cuenta_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.delete(this.url + 'eliminar_cuenta_admin/' + id, { headers: headers });
  }

  actualizar_cuenta_admin(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'actualizar_cuenta_admin/' + id, data, { headers: headers });
  }

  obtener_cuentas(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_cuentas', { headers: headers });
  }

  //CIRCULOS DE ESTUDIOS
  registro_circulo_admin(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_circulo_admin', data, { headers: headers });
  }

  obtener_circulo_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_circulo_admin/' + id, { headers: headers });
  }

  obtener_circulos_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_circulos_admin', { headers: headers });
  }

  eliminar_circulo_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.delete(this.url + 'eliminar_circulo_admin/' + id, { headers: headers });
  }

  actualizar_circulo_admin(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'actualizar_circulo_admin/' + id, data, { headers: headers });
  }

  obtener_circulos(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_circulos', { headers: headers });
  }

  //KPI
  kpi_ganancias_mensuales_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'kpi_ganancias_mensuales_admin', { headers: headers });
  }

  cantidad_simuacros_mes_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'cantidad_simuacros_mes_admin', { headers: headers });
  }

  //Cantidad de usuarios
  obtener_cantidad_usuarios_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_cantidad_usuarios_admin', { headers: headers });
  }

  //MENSAJES
  enviar_mensaje_contacto(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'enviar_mensaje_contacto', data, { headers: headers });
  }

  obtener_mensajes_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_mensajes_admin', { headers: headers });
  }

  cerrar_mensaje_admin(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'cerrar_mensaje_admin/' + id, data, { headers: headers });
  }

  //RESEÑAS
  registro_review_user(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_review_user', data, { headers: headers });
  }

  obtener_reviews(): Observable<any> {
    return this._http.get(this.url + 'obtener_reviews');
  }

  destacar_review_admin(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.put(this.url + 'destacar_review_admin/' + id, data, { headers: headers });
  }

  eliminar_review_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.delete(this.url + 'eliminar_review_admin/' + id, { headers: headers });
  }

  //RESULTADOS DE EXAMEN
  registro_resultado_examen(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_examen', data, { headers: headers });
  }

  obtener_resultados_examen(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultados_examen/' + id, { headers: headers });
  }

  //RANKING de USUARIOS
  obtener_ranking_usuarios(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_ranking_usuarios', { headers: headers });
  }

  //Resultados de prácticas ADMIN
  obtener_resultados_practica_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultados_practica_admin', { headers: headers });
  }

  //Resultados de prácticas de Álgebra
  registro_resultado_practicas_algebra(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_algebra', data, { headers: headers });
  }

  obtener_resultado_practicas_algebra(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_algebra/' + id, { headers: headers });
  }

  //Resultados de prácticas de Anatomía
  registro_resultado_practicas_anatomia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_anatomia', data, { headers: headers });
  }

  obtener_resultado_practicas_anatomia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_anatomia/' + id, { headers: headers });
  }

  //Resultados de prácticas de Aritmética
  registro_resultado_practicas_aritmetica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_aritmetica', data, { headers: headers });
  }

  obtener_resultado_practicas_aritmetica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_aritmetica/' + id, { headers: headers });
  }

  //Resultados de prácticas de Biología
  registro_resultado_practicas_biologia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_biologia', data, { headers: headers });
  }

  obtener_resultado_practicas_biologia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_biologia/' + id, { headers: headers });
  }

  //Resultados de prácticas de Economía
  registro_resultado_practicas_economia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_economia', data, { headers: headers });
  }

  obtener_resultado_practicas_economia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_economia/' + id, { headers: headers });
  }

  //Resultados de prácticas de Educación Cívica
  registro_resultado_practicas_ed_civica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_ed_civica', data, { headers: headers });
  }

  obtener_resultado_practicas_ed_civica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_ed_civica/' + id, { headers: headers });
  }

  //Resultados de prácticas de Física
  registro_resultado_practicas_fisica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_fisica', data, { headers: headers });
  }

  obtener_resultado_practicas_fisica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_fisica/' + id, { headers: headers });
  }

  //Resultados de prácticas de Geografia
  registro_resultado_practicas_geografia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_geografia', data, { headers: headers });
  }

  obtener_resultado_practicas_geografia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_geografia/' + id, { headers: headers });
  }

  //Resultados de prácticas de Geometría
  registro_resultado_practicas_geometria(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_geometria', data, { headers: headers });
  }

  obtener_resultado_practicas_geometria(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_geometria/' + id, { headers: headers });
  }

  //Resultados de prácticas de Historia del Perú
  registro_resultado_practicas_historia_peru(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_historia_peru', data, { headers: headers });
  }

  obtener_resultado_practicas_historia_peru(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_historia_peru/' + id, { headers: headers });
  }

  //Resultados de prácticas de Historia Universal
  registro_resultado_practicas_historia_universal(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_historia_universal', data, { headers: headers });
  }

  obtener_resultado_practicas_historia_universal(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_historia_universal/' + id, { headers: headers });
  }

  //Resultados de prácticas de Lenguaje
  registro_resultado_practicas_lenguaje(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_lenguaje', data, { headers: headers });
  }

  obtener_resultado_practicas_lenguaje(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_lenguaje/' + id, { headers: headers });
  }

  //Resultados de prácticas de Literatura
  registro_resultado_practicas_literatura(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_literatura', data, { headers: headers });
  }

  obtener_resultado_practicas_literatura(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_literatura/' + id, { headers: headers });
  }

  //Resultados de prácticas de Química
  registro_resultado_practicas_quimica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_quimica', data, { headers: headers });
  }

  obtener_resultado_practicas_quimica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_quimica/' + id, { headers: headers });
  }

  //Resultados de prácticas de Razonamiento Matemático
  registro_resultado_practicas_raz_matematico(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_raz_matematico', data, { headers: headers });
  }

  obtener_resultado_practicas_raz_matematico(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_raz_matematico/' + id, { headers: headers });
  }

  //Resultados de prácticas de Razonamiento Verbal
  registro_resultado_practicas_raz_verbal(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_raz_verbal', data, { headers: headers });
  }

  obtener_resultado_practicas_raz_verbal(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_raz_verbal/' + id, { headers: headers });
  }

  //Resultados de prácticas de Trigonometría
  registro_resultado_practicas_trigonometria(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.post(this.url + 'registro_resultado_practicas_trigonometria', data, { headers: headers });
  }

  obtener_resultado_practicas_trigonometria(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': token });
    return this._http.get(this.url + 'obtener_resultado_practicas_trigonometria/' + id, { headers: headers });
  }

  //Obtener universidades y areas
  obtener_universidades(): Observable<any> {
    return this._http.get('./assets/universidades.json');
  }

  obtener_areas(): Observable<any> {
    return this._http.get('./assets/areas.json');
  }

  obtener_escuelas(): Observable<any> {
    return this._http.get('./assets/escuelas.json');
  }
}
