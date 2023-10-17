import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css']
})
export class TooltipsComponent {
  isActivated: boolean = false;
  activateMessage(): void {
    this.isActivated = true;
  }
  deactivateMessage(): void {
    this.isActivated = false;
  }
}
