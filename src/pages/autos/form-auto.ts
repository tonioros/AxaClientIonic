import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { AutoService } from "../../app/Services/auto.service";
import { AutosPage } from "./autos";
@Component({
  selector: 'page-autos',
  templateUrl: 'form-auto.html',
})

export class FormAutosPage {
    form={
        title:"Agregar Auto",
        textButton: "Agregar"
    }
    autoTemp = {
        modelo:"",
        anio:"",
        marca:"",
        idUsuario:"0",
        idEmpresa: "0"
    }
  constructor(public toastCtrl: ToastController,public _autos:AutoService,public navCtrl: NavController, public navParams: NavParams) {
      if(this.navParams.get("datos") != "AG"){          
        this._autos.getAAutos(this.navParams.get("datos"), res=>{
            this.autoTemp= res[0]
            this.form.textButton ="Guardar Cambios"
            this.form.title ="Editar Auto"
            console.log(this.autoTemp);
            
        })
        console.log(this.autoTemp);
      }

  }
    sendData(){
        this.autoTemp.idUsuario = localStorage.getItem("UDI")
        this.autoTemp.idEmpresa = localStorage.getItem("UDE")
        if(this.form.title == "Editar Auto"){
            this._autos.updateAuto(this.autoTemp, res=>{
                console.log(res)
                if(!res){
                     this.showToast("Hubo un error al editar")
                }
                this.navCtrl.pop()
                this.showToast("Se edito el auto")
            })
        }else{
            this._autos.insertAuto(this.autoTemp, res=>{
                console.log(res)
                if(!res){
                     this.showToast("Hubo un error al agregar")
                }
                this.navCtrl.pop()
                this.showToast("Se agrego el auto")
            })
        }
    }
    showToast(mensaje){
    let toast = this.toastCtrl.create({
        message: "Se calendarizo el servicio",
        duration: 3000,
        position: "top"        
    });
    toast.present();
    }
}