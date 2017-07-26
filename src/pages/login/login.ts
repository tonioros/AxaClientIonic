import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeClientePage } from "../home-cliente/home-cliente";
import { UsuarioService } from "../../app/Services/usuario.service";
import { AlertController,MenuController  } from 'ionic-angular';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public menuCtrl: MenuController,public _alert:AlertController, public navCtrl: NavController, public navParams: NavParams, private _usuario:UsuarioService) {
  }
  public dataUser = {nick: "", contrasena: "", state:false}
  ionViewWillEnter() {
  }
  iniciarS(){
    this.dataUser.state = true
    if(this.dataUser.nick != "" && this.dataUser.contrasena != ""){
      this._usuario.Autenticar(this.dataUser.nick, this.dataUser.contrasena, (res)=>{
        if(res.Mensaje){
          localStorage.setItem("UDI", res.usuario.idUsuario)
          localStorage.setItem("UNA", res.usuario.nombre)
          localStorage.setItem("UCO", res.usuario.correo)
          localStorage.setItem("UROi", res.usuario.idTipoUsuario)
          localStorage.setItem("URLI", res.usuario.urlIMG)
          this.menuCtrl.enable(false, 'unauthenticated');
          this.menuCtrl.enable(true, 'authenticated');
          this.navCtrl.setRoot(HomeClientePage); 
        }else{
          let alerta = this._alert.create({
            title:"Datos Incorrectos",
            subTitle: "Usuario o contraseña incorrectos",
            buttons: ["Ok"]
          })
          this.dataUser.state = false
          alerta.present()
        }
      })
    }else{
      let alerta = this._alert.create({
        title:"Llene los datos",
        subTitle: "Complete los campos",
        buttons: ["Ok"]
      })
      this.dataUser.state = false
      alerta.present()
    }
  }

}
