import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AutoService } from "../../app/Services/auto.service";
import { CalendarioService } from "../../app/Services/calendario.service";
import { ProxServiciosPage } from "./prox-servicios";
@Component({
  selector: 'page-prox-servicios-form-ser',
  templateUrl: 'prox-servicios-form-ser.html',
})
export class ProxServiciosFormSerPage {
  calendarioTemp ={
    date: "",
    time: "",
    fecha: "",
    descripcion:"",
    idAuto: "",
    idCliente: localStorage.getItem("UDI"),
    idEmpresa: localStorage.getItem("UDE")
  }
  constructor(public _auto:AutoService, public toastCtrl:ToastController ,public _calendario:CalendarioService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this._auto.getAutos().subscribe()
  }
  agregar(){
    this.calendarioTemp.fecha= this.calendarioTemp.date+" "+this.calendarioTemp.time+":00"
    this._calendario.insertServicioProx(this.calendarioTemp, res=>{
      if(res){
          let toast = this.toastCtrl.create({
        message: "Se calendarizo el servicio",
        duration: 3000,
        position: "top"        
        });
        toast.present();
        this.navCtrl.pop();
      }else{
          let toast = this.toastCtrl.create({
        message: "Tuvimos un error :c",
        duration: 3000,
        position: "top"        
        });
        toast.present();
      }
    })
    
  }
}
