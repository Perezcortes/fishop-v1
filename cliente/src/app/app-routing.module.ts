import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { PrincipalComponent } from '../app/components/principal/principal.component';
import { CarritoComponent } from '../app/components/carrito/carrito.component';
import { ProductoComponent } from '../app/components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home/principal",
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'principal',
        component: PrincipalComponent,
      },
      {
        path: 'carrito',
        component: CarritoComponent,
      },
      {
        path: 'producto',
        component: ProductoComponent,
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }