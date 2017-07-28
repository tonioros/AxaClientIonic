import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { MecanicoService } from "../../app/Services/mecanico.service"


@Component({
  selector: 'page-comentario',
  templateUrl: 'comentario-mecanico.html',
})
export class ComentarioPage {
    mecanicoTemp ={}
  constructor(public viewCtrl: ViewController,public _mecanico:MecanicoService, public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get("ID"));
        
    this._mecanico.getAMecanico(this.navParams.get("ID"), res=>{
            this.mecanicoTemp = res;            
        })
    }
  cerrar(){
    this.viewCtrl.dismiss();
  }
}
