import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  showSingleMenu = false;
  showSubMenu = false;

  toggleMenu(menu: string) {
    if (menu === 'single') {
      this.showSingleMenu = true;
      this.showSubMenu = false;
    } else if (menu === 'sub') {
      this.showSingleMenu = false;
      this.showSubMenu = true;
    }
  }
}
