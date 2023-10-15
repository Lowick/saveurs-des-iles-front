import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePresentationComponent } from './pages/page-presentation/page-presentation.component';


const routes: Routes = [
  {path:'', component: PagePresentationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
