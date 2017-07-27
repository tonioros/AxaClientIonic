import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AutoService {
    private uri:string ="https://axaws.herokuapp.com/api/auto/"
    constructor(private _http: Http) {}

    public listAuto:Array<any>=[]

    getAutos(){
       return this._http.get(this.uri+"us/"+localStorage.getItem("UDI")).map(res=>this.listAuto =res.json())
    }
    getAAutos(ID:string, callback){
       return this._http.get(this.uri+"au/"+ID).toPromise()
       .then(res=>{
         callback(res.json());
       })
    }
    insertAuto(data:any,callback){
        this._http.post(this.uri, data).toPromise()
        .then(res=>{
            console.log(res.json());
            
            callback(res.json().Mensaje)
        })
        .catch(res=>{

        })
    }
    updateAuto(data:any,callback){
        this._http.put(this.uri+data.idAuto, data).toPromise()
        .then(res=>{
            console.log(res.json());
            callback(res.json().Mensaje)
        })
        .catch(res=>{

        })
    }
    deleteAuto(data:any,callback){
        this._http.delete(this.uri+data.idAuto, data).toPromise()
        .then(res=>{
            console.log(res.json());
            callback(res.json().Mensaje)
        })
        .catch(res=>{

        })
    }
    
}