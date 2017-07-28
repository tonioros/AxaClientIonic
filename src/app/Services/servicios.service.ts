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
    getComentarios(IdServicio:string, callback){
        this.http.get("https://axaws.herokuapp.com/api/cs/serv/"+IdServicio).toPromise()
        .then(res=>{
            callback(res.json())
        })
        .catch(res=>{
            console.log(res);    
        })
    }
    insertComentario(data, callback){
        this.http.post("https://axaws.herokuapp.com/api/cs/", data).toPromise()
        .then(res=>{
            callback(res.json().Mensaje)
        })
        .catch(res=>{
            console.log(res);    
            callback(false)
        })
    }
    deleteComentario(id, callback){
        this.http.delete("https://axaws.herokuapp.com/api/cs/"+id).toPromise()
        .then(res=>{
            callback(res.json().Mensaje)
        })
        .catch(res=>{
            callback(false)
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