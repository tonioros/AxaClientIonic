import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AutoService } from "../../app/Services/auto.service";

@Component({
  selector: 'page-autos',
  templateUrl: 'form-auto.html',
})

export class FormAutosPage {
    form={
        title:"Agregar Auto",
        type:"primary",
        textButton: "Agregar"
    }
    autoTemp = {
        modelo:"",
        anio:"",
        marca:""
    }
  constructor(public _autos:AutoService,public navCtrl: NavController, public navParams: NavParams) {
      if(this.navParams.get("datos") != "AG"){
          console.log(this.navParams.get("datos"));
          
        this._autos.getAAutos(this.navParams.get("datos"), res=>{
            this.autoTemp= res[0]
            this.form.textButton ="Guardar Cambios"
            this.form.title ="Editar Auto"
            this.form.type = "greenDown"
        })
      }
  }
}