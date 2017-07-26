import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
//import { File } from "@ionic-native/file";
 
@Injectable()
export class UsuarioService {
    private uri:string = "https://axaws.herokuapp.com/"
    private userData:any;
    constructor(private _http: Http, private alert:AlertController) {
       /* this._file.checkFile(this._file.dataDirectory, "dataLOK.lk")
        .then(_=>{
            this._file.readAsText(this._file.dataDirectory, "dataLOK.lk").then(data=>{this.userData = JSON.parse(data)})
        })
        .catch(_=>{
            this._file.createFile(this._file.dataDirectory, "dataLOK.lk", false).then(_=>{})
        })*/
     }
    
    public Autenticar(nick:string, contrasena:string, callback){
        this._http.post(this.uri+"autenticar", {nick:nick, contrasena:contrasena}).toPromise()
        .then(res=>{
           /* if(res.json().Mensaje == true){
               this.CheckData()
            }*/
            callback(res.json())
        }).catch(res=>{
            callback({Mensaje: false})
        })
    }

    public Registrar(contrasena:string, nombre:string, correo:string, edad:string, urlIMG:string, callback){
        this._http.post(this.uri+"api/Usuario",{contrasena:contrasena,nombre:nombre, edad:edad, correo: correo, urlIMG:urlIMG}).toPromise()
        .then(res=>{
            callback(res.json())
        }).catch(res=>{
            callback(false)
        })
    }
     public Update(contrasena:string, nombre:string, correo:string, edad:string, urlIMG:string, callback){
        this._http.put(this.uri+"api/Usuario"+this.userData.idUsuario,{idUsuario: this.userData.idUsuario,contrasena:contrasena,nombre:nombre, edad:edad, correo: correo, urlIMG:urlIMG}).toPromise()
        .then(res=>{
            //this.CheckData()
            callback(res.json())
        }).catch(res=>{
            callback(false)
        })
    }
    public getUser(callback){
        this._http.get(this.uri+"api/Usuario/"+localStorage.getItem("UDI")).toPromise()
        .then(res=>{
            callback(res.json());
        }).catch(res=>{
            console.log("RESCATCH")
            console.log(res.json());
        })
    }
    public LogOut(){
        this.userData = {}
        //this.CheckData()
    }
    /*
    public CheckData(){
        if(!this.GuardarDatos()){
            let alert = this.alert.create({
                title:"Error!",
                subTitle: "Error al guardar datos",
                buttons: ["Ok"]
            })
            alert.present();
        }
    }
    public GuardarDatos(){
         this._file.checkFile(this._file.dataDirectory, "dataLOK.lk")
        .then(_=>{
                this._file.writeExistingFile(this._file.dataDirectory, "dataLOK.lk", JSON.stringify(this.userData))
                .then(_=>{return true}).catch(_=>{return false})
          })
        .catch(_=>{
              this._file.createFile(this._file.dataDirectory, "dataLOK.lk", false)
             .then(_=>{
                 this._file.writeExistingFile(this._file.dataDirectory, "dataLOK.lk", JSON.stringify(this.userData))
                 .then(_=>{return true}).catch(_=>{return false})
             })
             .catch(_=>{return false})
        })
    }*/
}