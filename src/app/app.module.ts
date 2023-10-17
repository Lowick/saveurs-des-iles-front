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
