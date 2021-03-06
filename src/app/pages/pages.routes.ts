import { Routes, RouterModule } from "@angular/router";


import { PagesComponent } from "./pages.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";





const pagesRoutes: Routes = [
    { path: '',
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
        { path: 'progres', component: ProgressComponent, data: { titulo: 'Progreso' } },
        { path: 'graficas', component: Graficas1Component, data: { titulo: 'Graficas' } },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de tema' } },
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Observables' } },
        { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
     ]
     }
]

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );