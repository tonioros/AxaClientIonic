import { Component } from '@angular/core';
import { NavController,ViewController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { ServicioService } from "../../app/Services/servicios.service";
@Component({
  selector: 'page-historial',
  templateUrl: 'detalle-historial.html',
})
export class DetalleHistorialPage {
    dataList:Array<any>=[]
    comentariosList:Array<any>=[]
    comentarios:boolean = false;
    comentarioTemp={
      idServicio: "",
      idCliente:"",
      descripcion: ""
    }

  constructor(public toastCtrl:ToastController,public alertCtrl:AlertController, public viewCtrl: ViewController,public servicio:ServicioService,public navCtrl: NavController, public navParams: NavParams) {
      this.servicio.getDetalles(this.navParams.get("ID"),res=>{
        this.dataList = res;
      })
      this.comentarioTemp.idServicio = this.navParams.get("ID")
      this.comentarioTemp.idCliente = localStorage.getItem("UDI")
      this.servicio.getComentarios(this.navParams.get("ID"),res=>{
         this.comentariosList = res;
      })
      if(this.navParams.get("fin") != null){
        this.comentarios= true;
      }
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }
  eliminar(id:any){
    let prompt = this.alertCtrl.create({
      title: 'Eliminar',
      message: `¿Desea eliminar el comentario ?` ,
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.servicio.deleteComentario(id, res=>{
              if(res){
                this.showToast("Se elimino el Comentario")
                this.comentarioTemp.descripcion =""
              }else{
                this.showToast("Oh oh, tenemos problemas de red")
              }
            })
          }
        }
      ]
    });
    prompt.present();
  }
  agregar(){
     this.servicio.insertComentario(this.comentarioTemp, res=>{
      if(res){
        this.showToast("Se agrego el Comentario")
        this.comentarioTemp.descripcion =""
      }else{
           this.showToast("Oh oh, tenemos problemas de red")
      }
    })
  }
 showToast(mensae){
   this.toastCtrl.create({
        message: mensae,
        duration: 2300
     }).present();  
  this.servicio.getComentarios(this.navParams.get("ID"),res=>{
      this.comentariosList = res;
  })
 }
}
