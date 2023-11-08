import { Component, Input } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reponse-formulaire',
  templateUrl: './reponse-formulaire.component.html',
  styleUrls: ['./reponse-formulaire.component.css']
})
export class ReponseFormulaireComponent {
  @Input() reservations: Reservation[]=[];
  

  constructor(
    private reservationService: ReservationService
  ){}

  ngOnInit():void{
    this.reservationService.getAllReservation().subscribe((data:Reservation[])=>{
      this.reservations=data;
    });
  }

    delete(id: number) {
    console.log(id);
    const confirmDelete = confirm(
      'Etes- vous sûr de vouloir supprimer ce manga?'
    );
    if(!confirmDelete){
      return;
    }
    this.reservationService.deleteReservation(id).subscribe((response)=>{
      console.log('la reservation a bien été supprimée.' + response);
    });
    alert('La reservation a bien été supprimée.')
    location.reload();
}



}
