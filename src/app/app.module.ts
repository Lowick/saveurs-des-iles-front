import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAvisComponent } from './pages/page-avis/page-avis.component';
import { PagePresentationComponent } from './pages/page-presentation/page-presentation.component';
import { CardRegisterComponent } from './components/card-register/card-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { AvisModalComponent } from './avis-modal/avis-modal.component';
import { PagePlatComponent } from './pages/page-plat/page-plat.component';
import { PlatListComponent } from './components/plat-list/plat-list.component';
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';
import { CreationPlatComponent } from './components/creation-plat/creation-plat.component';
import { SuppressionPlatComponent } from './components/suppression-plat/suppression-plat.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';


@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    CarrouselComponent,
    PageHomeComponent,
    PageAvisComponent,
    PagePresentationComponent,
    CardRegisterComponent,
    CardLoginComponent,
    AvisModalComponent,
    PagePlatComponent,
    PlatListComponent,
    PageReservationComponent,
    CreationPlatComponent,
    SuppressionPlatComponent,
    PageAdminComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
