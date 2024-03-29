import { RouterModule, Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard',
                                                                        descripcion: 'Esta es la sección Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress',
                                                                      descripcion: 'Esta es la sección Progress'} },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas',
                                                                        descripcion: 'Esta es la sección Gráficas'} },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas',
                                                                      descripcion: 'Esta es la sección Promesas'} },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs',
                                                              descripcion: 'Esta es la sección RxJs'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema',
                                                                                     descripcion: 'Esta es la sección Ajustes del Tema'} },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
     }
];

export const PAGES_ROUTES =  RouterModule.forChild( pagesRoutes );