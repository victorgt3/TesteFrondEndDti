import { Routes } from '@angular/router';
import { TemplateComponent } from './shared/template/template.component';
import { BuscarFilmesComponent } from './filme/buscar-filme/buscar-filmes.component';

export const rootRouterConfing: Routes = [
    { path: '', redirectTo: '/buscar-filme', pathMatch: 'full' },
    { path: 'home', component: TemplateComponent },
    { path: 'buscar-filme', component: BuscarFilmesComponent },
]