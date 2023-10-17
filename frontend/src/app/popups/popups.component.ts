import { Component } from '@angular/core';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent {

  alert(){
    alert('this is alert msg');
  }
  openconfirm(){
    const  isconfirm =confirm('Are you sure you want to confirm...?');
    if(isconfirm){
      alert('action confirmed');
    }else{
      alert('cancelled')
    }
}
openPrompt() {
  const userInput = prompt("Please enter something:");
  
  if (userInput !== null) {
    alert("You entered: " + userInput);
  } else {
    alert("You cancelled the prompt.");
  }
}
openWindow() {
  window.confirm("are you sure");
}
openPopupDuplicateWindow() {
  window.open('"https://www.tutorialspoint.com/"', '_blank', 'width=300,height=200');
}
}
