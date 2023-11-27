import { Component,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('rainbow', [
      state('red', style({ color: 'red' })),
      state('orange', style({ color: 'orange' })),
      state('yellow', style({ color: 'yellow' })),
      state('green', style({ color: 'green' })),
      state('blue', style({ color: 'blue' })),
      state('indigo', style({ color: 'indigo' })),
      state('violet', style({ color: 'violet' })),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class LoginPage implements OnInit {
  
  formularioLogin: FormGroup;
  
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  currentColor = 0;


  constructor(public fb: FormBuilder, private alertController: AlertController, private router: Router) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }
  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    var nombreUsuario = localStorage.getItem('nombreUsuario');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (nombreUsuario == f.nombre && contrasenaUsuario == f.contrasena) {
      localStorage.setItem('autenticado','true');
      this.router.navigate(["/inicio"]);      
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }
}