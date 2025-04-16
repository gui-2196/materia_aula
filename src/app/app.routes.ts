import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'botoes',
    loadComponent: () => import('./pages/botoes/botoes.page').then( m => m.BotoesPage)
  },
  {
    path: 'alerta',
    loadComponent: () => import('./pages/alerta/alerta.page').then( m => m.AlertaPage)
  },
  {
    path: 'badges',
    loadComponent: () => import('./pages/badges/badges.page').then( m => m.BadgesPage)
  },
  {
    path: 'cartao',
    loadComponent: () => import('./pages/cartao/cartao.page').then( m => m.CartaoPage)
  },
  {
    path: 'datas',
    loadComponent: () => import('./pages/datas/datas.page').then( m => m.DatasPage)
  },
  {
    path: 'variaveis/home',
    loadComponent: () => import('./pages/variaveis/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'variaveis/detalhes',
    loadComponent: () => import('./pages/variaveis/detalhes/detalhes.page').then( m => m.DetalhesPage)
  },

];
