import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { UsuarioService } from "../../app/Services/usuario.service";
import { AlertController,MenuController  } from 'ionic-angular';
@Component({
  selector: 'page-login',
  template: '',
})
export class LoginOutPage {

  constructor(public menuCtrl: MenuController,public _alert:AlertController, public navCtrl: NavController, public navParams: NavParams, private _usuario:UsuarioService) {
          localStorage.clear()
          this.menuCtrl.enable(true, 'unauthenticated');
          this.menuCtrl.enable(false, 'authenticated');
          this.navCtrl.setRoot(HomePage); 
  }

}
