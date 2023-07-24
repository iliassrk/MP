import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-equipe-card',
  templateUrl: './equipe-card.component.html',
  styleUrls: ['./equipe-card.component.scss']
})
export class EquipeCardComponent {

  @Input() cardTitle: string = '';
  @Input() paragraph1: string = '';
  @Input() paragraph2: string = '';

}
