import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarioService } from "../../app/Services/calendario.service";
import { ProxServiciosFormSerPage } from "./prox-servicios-form-ser";
import { DetalleCalendarioPage } from "./detalles-calendario";
@Component({
  selector: 'page-prox-servicios',
  templateUrl: 'prox-servicios.html',
})
export class ProxServiciosPage {

  constructor(public modalCtrl:ModalController,public calendario:CalendarioService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.calendario.getProxServicios().subscribe()
  }

  toForm(){
    this.navCtrl.push(ProxServiciosFormSerPage)
  }
  toDetalle(element){
    let modal = this.modalCtrl.create(DetalleCalendarioPage,{element});
    modal.present();
  }
}
