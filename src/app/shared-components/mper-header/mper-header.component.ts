import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mper-header',
  templateUrl: './mper-header.component.html',
  styleUrls: ['./mper-header.component.scss']
})
export class MperHeaderComponent {

  @Input() titleDark: string = '';

  @Input() titleLight: string = '';

  @Input() subTitle: string = '';

  @Input() italic: boolean = false;

  @Input() hiddenTitle: boolean = false;



}
