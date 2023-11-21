import { Component } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
connected:boolean=false;
  constructor(private inscriptionService: InscriptionService) {}

  ngOnInit():void{
    this.inscriptionService.isConnected$.subscribe((resp)=>{
      this.connected=resp;

    })
  }

  

  logout() {
    this.inscriptionService.logout();
    this.connected=false;
  }

}
