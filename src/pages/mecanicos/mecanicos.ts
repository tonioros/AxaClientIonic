import { Component } from '@angular/core';
import { NavController, NavParams , ModalController} from 'ionic-angular';
import { MecanicoService } from "../../app/Services/mecanico.service"
import { ComentarioPage } from "./comentario-mecanico";

@Component({
  selector: 'page-mecanicos',
  templateUrl: 'mecanicos.html',
})
export class MecanicosPage {

  constructor(public _mecanico:MecanicoService, public _modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this._mecanico.getMecanicos().subscribe();
  }
  detalles(ID){
    let modal =  this._modal.create(ComentarioPage, {ID})
    modal.present()
  }
}
