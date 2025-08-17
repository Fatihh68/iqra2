import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-anasayfa',
    imports: [CommonModule, RouterModule],
    standalone: true,
    templateUrl: './anasayfa.component.html',
    styleUrl: './anasayfa.component.css'
})
export class AnasayfaComponent {
  constructor() { }

  kayitOl() {
    // Action when user clicks "Şimdi kayıt ol"
    // e.g., navigate to a form, open a modal, etc.
    console.log("Kayıt ol button clicked!");
  }
}
