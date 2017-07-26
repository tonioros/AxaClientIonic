import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AutoService } from "../../app/Services/auto.service";
import { FormAutosPage } from "./form-auto";
@Component({
  selector: 'page-autos',
  templateUrl: 'autos.html',
})

export class AutosPage {

  constructor(public _autos:AutoService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this._autos.getAutos().subscribe();
  }

  toForm(datos:any){
      this.navCtrl.push(FormAutosPage, {datos})
  }
}