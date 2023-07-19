import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';


const routes: Routes = [
    // {
    //     path: '',
    //     component: HomePageComponent,
    //     pathMatch: 'full'
    // },
    {
        path: 'buscar',
        loadChildren:() => import('./pais/pais.module').then(m => m.countriesModule)
    },
    // {
    //     path: 'region',
    //     component: PorRegionComponent,
    // },
    // {
    //     path: 'capital',
    //     component: PorCapitalComponent,

    // },
    // {
    //     path: 'pais/:id',
    //     component: VerPaisComponent,

    // },
    {
        path: '**',
        redirectTo: 'buscar',
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes ),
    ],
    exports:[
        RouterModule,
    ],
})

export class AppRoutingModule {}
