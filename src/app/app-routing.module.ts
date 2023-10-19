import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePresentationComponent } from './pages/page-presentation/page-presentation.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAvisComponent } from './pages/page-avis/page-avis.component';
import { PagePlatComponent } from './pages/page-plat/page-plat.component';
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';


const routes: Routes = [
  {path:'', component: PagePresentationComponent},
  {path:'home', component: PageHomeComponent},
  {path:'avis', component: PageAvisComponent},
  {path: 'reservation', component: PageReservationComponent},
  {path:'plat', component: PagePlatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
