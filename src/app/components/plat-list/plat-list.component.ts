import { Component, Input } from '@angular/core';
import { Plat } from 'src/app/models/plat';

@Component({
  selector: 'app-plat-list',
  templateUrl: './plat-list.component.html',
  styleUrls: ['./plat-list.component.css']
})
export class PlatListComponent {
@Input() plat!: Plat[];
}
