import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Actividades', url: '/progres' },
        { titulo: 'Calendario', url: '/graficas' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'Observables', url: '/rxjs' }
      ]
    },
    {
      titulo: 'Tesoreria',
      icono: 'mdi mdi-currency-usd',
      submenu: [
        { titulo: 'Ofrendas', url: '/dashboard' },
        { titulo: 'Diezmos', url: '/progres' },
        { titulo: 'Graficas', url: '/graficas' },
        { titulo: 'Informes', url: '/promesas' },
        { titulo: 'Observables', url: '/rxjs' }
      ]
    },
    {
      titulo: 'Secretaria',
      icono: 'mdi mdi-human-handsup',
      submenu: [
        { titulo: 'Membrecia', url: '/dashboard' },
        { titulo: 'Miembros act/pas', url: '/progres' },
        { titulo: 'Graficas', url: '/graficas' },
        { titulo: 'Comites', url: '/graficas' },
      ]
    }
  ];

  constructor() { }
}
