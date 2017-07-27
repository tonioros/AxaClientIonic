import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalendarioService } from "../../app/Services/calendario.service";
import { ProxServiciosFormSerPage } from "./prox-servicios-form-ser";
@Component({
  selector: 'page-prox-servicios',
  templateUrl: 'prox-servicios.html',
})
export class ProxServiciosPage {

  constructor(public calendario:CalendarioService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.calendario.getProxServicios().subscribe()
  }

  toForm(){
    this.navCtrl.push(ProxServiciosFormSerPage)
  }

}
