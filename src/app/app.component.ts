import { Component,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular'; 



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Contactos', url: '/contactos', icon: 'call' }


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public router: Router, private menu: MenuController)  { }

  abrirMapa() {
    this.router.navigate(["/mapa"]);
    this.menu.close();
  }

  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/login"]);
    this.menu.close();
  }

}

  
