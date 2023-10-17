import { Component } from '@angular/core';

@Component({
  selector: 'app-autocomplte',
  templateUrl: './autocomplte.component.html',
  styleUrls: ['./autocomplte.component.css']
})
export class AutocomplteComponent {
  singleValuesActive: boolean = false;
  multipleValuesActive: boolean = false;

  showSingleValues() {
    this.singleValuesActive = true;
    this.multipleValuesActive = false;
  }

  showMultipleValues() {
    this.singleValuesActive = false;
    this.multipleValuesActive = true;
  }
}
