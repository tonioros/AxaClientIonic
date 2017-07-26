import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { HomeClientePage } from "../home-cliente/home-cliente";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public menuCtrl:MenuController,public navCtrl: NavController) {
    if(localStorage.getItem("UDI") != null){
      this.menuCtrl.enable(false, 'unauthenticated');
      this.menuCtrl.enable(true, 'authenticated');
      this.navCtrl.setRoot(HomeClientePage); 
    }
  }

}
