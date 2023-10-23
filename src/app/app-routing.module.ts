import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePresentationComponent } from './pages/page-presentation/page-presentation.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAvisComponent } from './pages/page-avis/page-avis.component';
import { PagePlatComponent } from './pages/page-plat/page-plat.component';
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardRegisterComponent } from './components/card-register/card-register.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:"full"},
  {path:'home', component: PageHomeComponent},
  {path:'avis', component: PageAvisComponent},
  {path:'login', component:CardLoginComponent},
  {path:'register', component:CardRegisterComponent},
  {path: 'reservation', component: PageReservationComponent},
  {path:'plat', component: PagePlatComponent},
  {path:'admin', component:PageAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
