import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {


  selectedTabIndex = 1;


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }

}
