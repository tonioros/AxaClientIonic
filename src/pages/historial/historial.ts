import { Component } from '@angular/core';
import { NavController,ViewController, NavParams, ModalController } from 'ionic-angular';
import { ServicioService } from "../../app/Services/servicios.service";
import { DetalleHistorialPage } from "./detalle-historial";
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  constructor(public viewCtrl: ViewController,public modalCtrl:ModalController,public servicio:ServicioService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.servicio.getFactura().subscribe()
    this.servicio.getServicio().subscribe()
  }
  cerrar(){
    this.viewCtrl.dismiss();
  }
  detalles(ID:any){
    let modal = this.modalCtrl.create(DetalleHistorialPage,{ID});
    modal.present();
  }

}
