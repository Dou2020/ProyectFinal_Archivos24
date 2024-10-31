import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/admin/inicio/inicio.component';
import { InicioEmployeerComponent } from './pages/employeer/inicio/inicio.component';
import { CompartidoComponent } from './pages/employeer/compartido/compartido.component';

export const routes: Routes = [
    {path:'', component:LoginComponent },

    //Routes Admin
    {path:'admin', component: InicioComponent},
    //Routes Employeer
    {path:'employeer', component: InicioEmployeerComponent},
    {path:'employeer/compartido', component:CompartidoComponent}
];
