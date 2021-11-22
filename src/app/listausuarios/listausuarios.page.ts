import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.page.html',
  styleUrls: ['./listausuarios.page.scss'],
})
export class ListausuariosPage implements OnInit {
  usuarios:any[];

  constructor(public navCtrl: NavController, public http:ApiRestService) { }

  ngOnInit() {
  }

  cargarUsuarios(){
    this.http.loadUsers().subscribe(
      (res) => { 
        this.usuarios = res['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
