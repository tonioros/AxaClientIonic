import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { AutoService } from "../../app/Services/auto.service";
import { FormAutosPage } from "./form-auto";
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-autos',
  templateUrl: 'autos.html',
})

export class AutosPage {

  constructor(public toastCtrl: ToastController,public alertCtrl: AlertController,public _autos:AutoService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this._autos.getAutos().subscribe();
  }

  toForm(datos:any){
      this.navCtrl.push(FormAutosPage, {datos})
  }

  eliminar(nombre:string, id:any){
    let prompt = this.alertCtrl.create({
      title: 'Eliminar',
      message: `¿Desea eliminar el auto ${nombre} ?` ,
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this._autos.deleteAuto({idAuto: id}, (res)=>{
            this.toastCtrl.create({
                    message: (res)?"Se elimino el auto con exito" : "Oh no!, hemos tenido problemas en eliminarlo",
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