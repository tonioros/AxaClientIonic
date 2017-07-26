import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from "../../app/Services/usuario.service";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public userData={codigo:"", nombreEmpresa:"", file:""}

  constructor(public _usuario:UsuarioService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this._usuario.getUser(res=>{
      console.log(res[0]);
      
      this.userData=res[0];
    });
  }
  cargarIMG($event){
        let file = $event.target.files[0]
        this.userData.file = file;
    }

}
