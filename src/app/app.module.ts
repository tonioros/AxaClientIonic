import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
 
import { MyApp } from './app.component';
//Page Para Cliente 
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { HomeClientePage } from "../pages/home-cliente/home-cliente";
import { FormAutosPage } from "../pages/autos/form-auto";
import { AutosPage } from "../pages/autos/autos";
import { HistorialPage } from "../pages/historial/historial";
import { PerfilPage } from "../pages/perfil/perfil";
//Hasta donde entiendo esa para graficos v':
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Servicios para conexion con WEB SERVICES
import { UsuarioService } from "./Services/usuario.service";
import { AutoService } from "./Services/auto.service";
//Modulos extras para el funcionamiento
import { HttpModule } from '@angular/http';
import { File as FilePro } from "@ionic-native/file";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    HistorialPage,
    HomeClientePage,
    AutosPage,
    PerfilPage,
    FormAutosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    HistorialPage,
    HomeClientePage,
    FormAutosPage,
    AutosPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    FilePro,
    SplashScreen,
    UsuarioService,
    AutoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ] 
})

export class AppModule {}
