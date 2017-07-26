import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AutosPage } from "../autos/autos";
import { HistorialPage } from "../historial/historial";
import { PerfilPage } from "../perfil/perfil";
@Component({
  selector: 'page-home-cliente',
  templateUrl: 'home-cliente.html',
})
export class HomeClientePage {

  usuario= {nombre:  localStorage.getItem("UNA"), urlIMG: localStorage.getItem("URLI")};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    }
    this.navCtrl.popTo(viewController)
  }
  

}
