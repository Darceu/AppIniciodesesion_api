import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'confirmacionContraseña': new FormControl("", Validators.required)
    });
      
    
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Error, Formulario incompleto',
        message: 'Llena todos los campos del formulario. . .',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      correo: f.correo,
      contraseña: f.contraseña
    }


    localStorage.setItem('usuario',JSON.stringify(usuario))

    localStorage.setItem('ingresado', 'true')
      this.navCtrl.navigateRoot('menu/inicio');
  }

}
