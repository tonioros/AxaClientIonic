import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AutosPage } from "../autos/autos";
import { HistorialPage } from "../historial/historial";
import { PerfilPage } from "../perfil/perfil";
import { ProxServiciosPage } from "../prox-servicios/prox-servicios";

import { AutoService } from "../../app/Services/auto.service";
import { ServicioService } from "../../app/Services/servicios.service"
import { CalendarioService } from "../../app/Services/calendario.service"
@Component({
  selector: 'page-home-cliente',
  templateUrl: 'home-cliente.html',
})
export class HomeClientePage {
 
  usuario= {nombre:  localStorage.getItem("UNA"), urlIMG: localStorage.getItem("URLI")};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _auto:AutoService,
    public _servicios:ServicioService,
    public _calendario:CalendarioService
  ) {
      this._auto.getAutos().subscribe();
      this._servicios.getServicio().subscribe();
      this._calendario.getProxServicios().subscribe()
  }

  RedirectTo(view:string){
    
    var viewController:any = this;
    switch(view.toUpperCase()){
      case "AUTOS":
      viewController = AutosPage;
      break;
      case "PERFIL":
      viewController = PerfilPage;
      break;
      case "ANTIGUOSSER":
      viewController = HistorialPage
      break;
      case "SERVICIOSPROX":
      viewController = ProxServiciosPage
      break;
    }
    this.navCtrl.push(viewController)
  }
  

}
