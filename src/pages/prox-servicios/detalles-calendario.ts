import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController,ViewController } from 'ionic-angular';
import { CalendarioService } from "../../app/Services/calendario.service";
import { ProxServiciosPage } from "./prox-servicios";
@Component({
  selector: 'page-prox-servicios-form-ser',
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Detalle del Calendario
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content padding>
    <ion-item>
     <ion-row>
        <ion-col>
      <h2 >Fecha a realizar: <b>{{calendarioTemp.fechaFormat }}</b></h2>
        </ion-col>
        <ion-col col-2>
             <button ion-button color="danger" (click)="eliminar()" clear icon-only><ion-icon name="trash"></ion-icon></button>
        </ion-col>
        </ion-row>
    </ion-item>
    <ion-item>
      <h2>Hora: <b>{{calendarioTemp.horaFormat}}</b></h2>
    </ion-item>
    <ion-item>
      <h2>Auto: {{calendarioTemp.marca+" "+calendarioTemp.modelo+" "+calendarioTemp.anio}}</h2>
    </ion-item>
    <ion-item>
      <h2 text-wrap>Descripcion: {{calendarioTemp.descripcion}}</h2>
    </ion-item>
    <ion-item>
      <h2>Taller: <b>{{calendarioTemp.nombre}}</b></h2>
    </ion-item>
</ion-content>
  `
})
export class DetalleCalendarioPage {
  calendarioTemp ={
    date: "",
    time: "",
    fecha: "",
    descripcion:"",
    idAuto: "",
    idCalendario: "",
    idCliente: localStorage.getItem("UDI"),
    idEmpresa: localStorage.getItem("UDE")
  }
  constructor(public viewCtrl: ViewController,public alertCtrl:AlertController, public toastCtrl:ToastController ,public _calendario:CalendarioService,public navCtrl: NavController, public navParams: NavParams) {
    this.calendarioTemp = this.navParams.get("element");
    console.log(this.calendarioTemp);
    
    }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  eliminar(){
    let prompt = this.alertCtrl.create({
      title: 'Eliminar',
      message: `¿Desea eliminar este servicio agendado?` ,
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this._calendario.deleteServicioProx( this.calendarioTemp.idCalendario,(res)=>{
            this.toastCtrl.create({
                    message: (res)?"Se elimino el servicio con exito" : "Oh no!, hemos tenido problemas en eliminarlo",
                    duration: 2300
                  }).present();         
            })
          }
        }
      ]
    });
    prompt.present();
  }
}
