import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-title-section',
  templateUrl: './header-title-section.component.html',
  styleUrls: ['./header-title-section.component.scss']
})
export class HeaderTitleSectionComponent {
  @Input() urlImg = '../../../assets/images/bg%20NL.jpg';
  @Input() title = 'Mper Maroc';
  @Input() titleSub = 'Accueil';

}
