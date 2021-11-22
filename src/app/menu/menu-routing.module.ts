import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule),
    },]
  },
  {
    path: '',
    component: MenuPage,
    children: [{
        path: 'qr',
        loadChildren: () => import('../qr/qr.module').then( m => m.QRPageModule),
    },]
  },
  {
    path: '',
    component: MenuPage,
    children: [{
        path: 'listausuarios',
        loadChildren: () => import('../listausuarios/listausuarios.module').then( m => m.ListausuariosPageModule),
    },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
