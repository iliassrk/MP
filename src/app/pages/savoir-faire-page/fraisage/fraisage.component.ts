import { Component } from '@angular/core';

@Component({
  selector: 'app-fraisage',
  templateUrl: './fraisage.component.html',
  styleUrls: ['./fraisage.component.scss']
})
export class FraisageComponent {
  selectedTabIndex = 0;


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
