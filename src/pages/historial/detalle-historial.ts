import { Component } from '@angular/core';
import { NavController,ViewController, NavParams } from 'ionic-angular';
import { ServicioService } from "../../app/Services/servicios.service";
@Component({
  selector: 'page-historial',
  templateUrl: 'detalle-historial.html',
})
export class DetalleHistorialPage {
    dataList:Array<any>=[]
  constructor( public viewCtrl: ViewController,public servicio:ServicioService,public navCtrl: NavController, public navParams: NavParams) {
      this.servicio.getDetalles(this.navParams.get("ID"),res=>{
        this.dataList = res;
      })
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

}
