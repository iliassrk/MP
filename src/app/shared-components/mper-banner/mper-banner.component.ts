import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mper-banner',
  templateUrl: './mper-banner.component.html',
  styleUrls: ['./mper-banner.component.scss']
})
export class MperBannerComponent {
  @Input() urlImg = '../../../assets/images/bg%20NL.jpg';
  @Input() title = 'Mper Maroc';
  @Input() titleSub = 'Accueil';

}
