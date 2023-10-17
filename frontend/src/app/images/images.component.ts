import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  selectedFile: File | undefined;
  uploadedImages: { name: string, url: string }[] = [];

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.selectedFile = inputElement.files[0];
    }
  }
  uploadImage() {
    if (this.selectedFile) {
      const imageUrl = 'URL_TO_THE_UPLOADED_IMAGE';
      this.uploadedImages.push({ name: this.selectedFile.name, url: imageUrl });
      
      this.selectedFile = undefined;
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    }
  }

  chooseFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  } 
}
