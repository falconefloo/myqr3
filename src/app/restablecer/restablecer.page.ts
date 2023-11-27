import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: 'restablecer.page.html',
  styleUrls: ['restablecer.page.scss']
})
export class RestablecerPage {
  

  constructor(private router: Router, public fb: FormBuilder, private alertController: AlertController) {}

  async restablecerContrasena() {
    try {
      // Recuperar la contraseña del localStorage de manera asincrónica
      const contrasenaAlmacenada = await this.obtenerContrasenaDelLocalStorage();

      if (contrasenaAlmacenada) {
        const alert = await this.alertController.create({
          header: 'Mensaje',
          message: 'Debes ingresar todos los datos',
          buttons: ['OK']
        });
        
        
        // Redirigir a la página de inicio de sesión
        this.router.navigate(['/login']);
      } else {
        // Manejar el caso en el que la contraseña no se encuentra en el localStorage
        alert('No se encontró una contraseña almacenada.');
      }
    } catch (error) {
      console.error('Error al recuperar la contraseña del localStorage:', error);
    }
  }

  private async obtenerContrasenaDelLocalStorage(): Promise<string | null> {
    return localStorage.getItem('contrasenaUsuario');
  }
}