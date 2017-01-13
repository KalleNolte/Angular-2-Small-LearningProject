import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../shared/page404/page404.component';
    
    const routes: Routes =[
        {
            path: '**', component: Page404Component
        }
    ]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);