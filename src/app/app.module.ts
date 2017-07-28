import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
 
import { MyApp } from './app.component';
//Page Para Cliente 
import { HomePage } from '../pages/home/home';
import { LoginOutPage } from '../pages/login/logout';
import { LoginPage } from "../pages/login/login";
import { HomeClientePage } from "../pages/home-cliente/home-cliente";
import { FormAutosPage } from "../pages/autos/form-auto";
import { AutosPage } from "../pages/autos/autos";
import { HistorialPage } from "../pages/historial/historial";
import { DetalleHistorialPage } from "../pages/historial/detalle-historial";
import { PerfilPage } from "../pages/perfil/perfil";
import { ComentarioPage } from "../pages/mecanicos/comentario-mecanico";
import { MecanicosPage } from "../pages/mecanicos/mecanicos";
import { ProxServiciosPage } from "../pages/prox-servicios/prox-servicios";
import { ProxServiciosFormSerPage } from "../pages/prox-servicios/prox-servicios-form-ser";
import { DetalleCalendarioPage } from "../pages/prox-servicios/detalles-calendario";
//Hasta donde entiendo esa para graficos v':
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Servicios para conexion con WEB SERVICES
import { UsuarioService } from "./Services/usuario.service";
import { AutoService } from "./Services/auto.service";
import { ServicioService } from "./Services/servicios.service";
import { CalendarioService } from "./Services/calendario.service";
import { MecanicoService } from "./Services/mecanico.service";
//Modulos extras para el funcionamiento
import { HttpModule } from '@angular/http';
import { File as FilePro } from "@ionic-native/file";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoginOutPage,
    MecanicosPage,
    HistorialPage,
    DetalleHistorialPage,
    ProxServiciosFormSerPage,
    DetalleCalendarioPage,
    ProxServiciosPage,
    ComentarioPage,
    HomeClientePage,
    FormAutosPage,
    AutosPage,
    PerfilPage
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
    LoginOutPage,
    MecanicosPage,
    DetalleHistorialPage,
    ProxServiciosFormSerPage,
    DetalleCalendarioPage,
    ProxServiciosPage,
    HomeClientePage,
    ComentarioPage,
    FormAutosPage,
    AutosPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    FilePro,
    SplashScreen,
    ServicioService,
    CalendarioService,
    MecanicoService,
    UsuarioService,
    AutoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ] 
})

export class AppModule {}
