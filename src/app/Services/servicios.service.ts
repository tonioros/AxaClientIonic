import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicioService {
    constructor(private http: Http) { }
    listServicios:Array<any>=[]
    listFactura:Array<any>=[]
    uriFactura= "https://axaws.herokuapp.com/api/servicio/"
    uriServicio= "https://axaws.herokuapp.com/api/servicio/"
    getServicio(){
        var url = this.uriServicio+"cl/SF/"+localStorage.getItem("UDI");
        
       return this.http.get(url).map(res=>this.listServicios=res.json())
    }
    getFactura(){
        return this.http.get(this.uriFactura+"cl/CF/"+localStorage.getItem("UDE")).map(res=>this.listFactura = res.json());
    }
    getDetalles(IdServicio:string, callback){
        this.http.get("https://axaws.herokuapp.com/api/ds/serv/"+IdServicio).toPromise()
        .then(res=>{
            callback(res.json())
        })
        .catch(res=>{
            console.log(res);    
        })
    }
    getADetalles(ID:string, callback){
        this.http.get("https://axaws.herokuapp.com/api/ds/"+ID).toPromise()
        .then(res=>{
            callback(res.json())
        })
        .catch(res=>{
            console.log(res);    
        })
    }

}