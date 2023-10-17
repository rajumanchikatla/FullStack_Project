import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  activeContent: string = ''; 

  showWorkingLinks() {
    this.activeContent = 'workingLinks';
  }
  showBrokenLinks() {
    this.activeContent = 'brokenLinks';
  }
  showImageLinks() {
    this.activeContent = 'imageLinks';
  }
  showStatusCodes() {
    this.activeContent = 'statusCodes';
  }
}
