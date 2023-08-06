import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {


  selectedTabIndex = 0;

  footerSelectedTabIndex = 0;


  onChangeTab(index: number){
    this.selectedTabIndex = index;
  }

  onChangeFooterTab(index: number){
    this.footerSelectedTabIndex = index;
  }

}
