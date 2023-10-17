import { Component } from '@angular/core';

@Component({
  selector: 'app-css-properties',
  templateUrl: './css-properties.component.html',
  styleUrls: ['./css-properties.component.css']
})
export class CssPropertiesComponent {

  activeContent: string = ''; 

  showWorkingLinks() {
    this.activeContent = 'workingLinks';
  }
  showlabels() {
    this.activeContent = 'brokenLinks';
  }
  showbuttons() {
    this.activeContent = 'imageLinks';
  }
  showprogressbar() {
    this.activeContent = 'statusCodes';
  }

}
