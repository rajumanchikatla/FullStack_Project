import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multipletabs',
  templateUrl: './multipletabs.component.html',
  styleUrls: ['./multipletabs.component.css']
})
export class MultipletabsComponent {
  selectedTab: number = 0; // Initially, the first tab is selected

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }


}