import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "**",
        loadComponent: ()=>  
            import("../components/saludo/saludo").then(compo => compo.Saludo)
    }
];
