import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalendarioService } from "../../app/Services/calendario.service";
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

}
