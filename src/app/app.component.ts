import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { LoginOutPage } from '../pages/login/logout';
import { HomeClientePage } from "../pages/home-cliente/home-cliente";
import { AutosPage } from "../pages/autos/autos";
import { HistorialPage } from "../pages/historial/historial";
import { PerfilPage } from "../pages/perfil/perfil";
import { ProxServiciosPage } from "../pages/prox-servicios/prox-servicios";
import { MecanicosPage } from "../pages/mecanicos/mecanicos";
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pagesForInit: Array<{title: string, component: any, icon:string}>;
  pagesForLog: Array<{title: string, component: any, icon:string}>;
  stateNav = (localStorage.getItem("UDI") == null);

  constructor(public menuCtrl: MenuController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
   // this.menuCtrl.enable(true, "unauthenticated");
    //this.menuCtrl.enable(false, "authenticated")
    // used for an example of ngFor and navigation
    this.pagesForInit = [
      { title: 'Inicio', component: HomePage, icon:"home" },
      { title: 'Iniciar Sesion', component: LoginPage, icon:"lock" } 
    ];

    this.pagesForLog =[
      {title:"Inicio",component: HomeClientePage, icon:"home"},
      {title:"Perfil",component: PerfilPage, icon:"person"},
      {title:"Mis Autos",component: AutosPage, icon:"car"},
      {title:"Servicios Realizados",component: HistorialPage, icon:"hammer"},
      {title:"Proximos Servicios",component: ProxServiciosPage, icon:"calendar"},
      {title:"Mecanicos",component: MecanicosPage, icon:"build"},
      {title:"Cerrar Sesion",component: LoginOutPage, icon:"arrow-dropleft-circle"}
    ]

  } 

  ionDrag() {
   this.stateNav = (localStorage.getItem("UDI") == null);
    console.log(this.stateNav);
    
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
