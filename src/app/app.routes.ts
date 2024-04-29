import { Routes } from '@angular/router';
import { ProductoComponent } from './pantallas/producto/producto.component';
import { UsuarioComponent } from './pantallas/usuario/usuario.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';

export const routes: Routes = [
    {'path':'producto', component:ProductoComponent},
    {'path':'usuario', component:UsuarioComponent},
    {'path':'inicio', component:InicioComponent}
];
