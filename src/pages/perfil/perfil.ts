import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { UsuarioService } from "../../app/Services/usuario.service";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public userData={
  codigo:"", 
  nombreEmpresa:"", 
  file:"",
  contrasena:"",
  contrasena2:"",
  nombre: "",
  correo: "",
  edad: "",
  urlIMG:""
}

  constructor(public _usuario:UsuarioService, public toast:ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
   this.cargarPerfil()
  }
  cargarPerfil(){
     this._usuario.getUser(res=>{
      this.userData=res[0];
    });
  }
  cargarIMG($event){
        this.userData.file = $event.target.files[0];
        console.log(this.userData.file);
  }
  enviar(){
   if(this.userData.contrasena == this.userData.contrasena2){
    if(typeof this.userData.urlIMG == "string"){
      this.sinImagen()
    }else{
      this.conImagen()
    }
    }else{
      let _toast = this.toast.create({
        message: "Las contraeñas no coinciden",
        position: "top",
        duration:3000
      })
      _toast.present()
    }
  }

  conImagen(){
     this._usuario.SubirImagen(this.userData.file, res=>{
      this._usuario.Update(this.userData.contrasena, this.userData.nombre, this.userData.correo, this.userData.edad, res.Mensaje, (res)=>{
        let _toast = this.toast.create({
          message: "Se Modificio el perfil",
          position: "top",
          duration:3000
        })
        _toast.present()
      })
      this.cargarPerfil()
    })
  }
  sinImagen(){
      this._usuario.Update(this.userData.contrasena, this.userData.nombre, this.userData.correo, this.userData.edad, this.userData.urlIMG, (res)=>{
        let _toast = this.toast.create({
          message: "Se Modificio el perfil",
          position: "top",
          duration:3000
        })
        _toast.present()
      })
      this.cargarPerfil()
  }
}
