import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsiblecontent',
  templateUrl: './collapsiblecontent.component.html',
  styleUrls: ['./collapsiblecontent.component.css']
})
export class CollapsiblecontentComponent {

  collapseMode: 'single' | 'multiple' = 'single';

  setCollapseMode(mode: 'single' | 'multiple') {
    this.collapseMode = mode;
  }
}
