import { Component } from '@angular/core';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss']
})
export class ControleComponent {

  selectedTabIndex = 0;


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }
}
