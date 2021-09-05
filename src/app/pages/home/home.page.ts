import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: string;

  nombre:string;
  apellido:string;
  educacion:string;
  fechaNacimiento:Date;

  constructor( private router:Router, private activeRoute: ActivatedRoute, private alertController: AlertController ) { 
    this.activeRoute.queryParams.subscribe( params =>{
      // validar si la navegacion viene con parametros
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      }
    });
   }

  ngOnInit() {
  }


  // boton Mostrar
  clickAlert(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      
      header: 'Usuario registrado',
      subHeader: 'Bienvenido',
      message: `${this.nombre} ${this.apellido}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  limpiar(){
    this.nombre = '';
    this.apellido ='';
    this.educacion = null;
    this.fechaNacimiento = null; 
  }



}
