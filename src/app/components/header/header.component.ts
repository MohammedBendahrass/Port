// components/header/header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  downloadCV() {
    // Implement CV download logic
    const link = document.createElement('a');
    link.href = 'assets/MyRESUME.pdf';
    link.download = 'MohammedBendahrass_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
