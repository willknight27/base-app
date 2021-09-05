import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombreUsuario: string;
  
  constructor( private router: Router, ) { }

  ngOnInit() {
  }

  login(){

    //navigationExtras: Pasar un elemento mediante la ruta
    let navigationExtras: NavigationExtras ={
      state:{usuario: this.nombreUsuario}
    }
    // Redireccion a pagina home
    //El metodo navigate tendra como parametros la ruta y el objeto navigationextra(que contendra el noimbre del usuario)
    this.router.navigate(['/home'],navigationExtras);
  }



}
