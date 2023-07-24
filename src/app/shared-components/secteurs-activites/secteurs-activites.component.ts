import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-secteurs-activites',
  templateUrl: './secteurs-activites.component.html',
  styleUrls: ['./secteurs-activites.component.scss']
})
export class SecteursActivitesComponent {
  @Input() hiddenHeader = false;
  @Input() title = 'Nous atouts selon votre activité';
  @Input() colClass=  "col-lg-4 col-md-6 col-sm-12"
}
