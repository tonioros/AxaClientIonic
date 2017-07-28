import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MecanicoService {
    listMecanicos:Array<any>=[]
    constructor(private http: Http) {}
    getMecanicos(){
        return this.http.get("https://axaws.herokuapp.com/api/mecanico/cli/"+localStorage.getItem("UDI")).map(res => this.listMecanicos = res.json())
    }
    getAMecanico(ID,callback){
        this.http.get("https://axaws.herokuapp.com/api/usuario/"+ID).toPromise()
        .then(res=>{
            callback(res.json()[0])
        })
        .catch(res=>{
            console.log(res);
            callback({nombre:"Error de conexion", urlIMG:"http://www.emoji.co.uk/files/phantom-open-emojis/symbols-phantom/13003-cross-mark.png"})
        })
    }
}