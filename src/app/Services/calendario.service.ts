import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CalendarioService {
    listCalendario:Array<any> =[]
    constructor(private http: Http) { }
    getProxServicios(){
      return this.http.get("http://axaws.herokuapp.com/api/Cal/cli/"+localStorage.getItem("UDI")).map(res=>this.listCalendario = res.json())
    }
    getProxServiciosD(ID,callback){
      return this.http.get("http://axaws.herokuapp.com/api/Cal/"+ID).map(res=>this.listCalendario = res.json())
    }
    insertServicioProx(data, callback){
        this.http.post("https://axaws.herokuapp.com/api/Calendario", data).toPromise()
        .then(res=>{
            callback(res.json().Mensaje)
        })
        .catch(res=> {
            console.log(res);
            
        })
    }

    deleteServicioProx(ID, callback){
        this.http.delete("http://axaws.herokuapp.com/api/Cal/"+ID).toPromise()
        .then(res=>{
            callback(res.json())
        })
        .catch(res=> {
            console.log(res);
            
        })
    }
}