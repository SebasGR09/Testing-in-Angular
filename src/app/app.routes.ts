import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "**",
        loadComponent: ()=>  
            import("../components/integrador/integrador").then(integrador => integrador.Integrador)
    }
];
