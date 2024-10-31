// components/contact/contact.component.ts
import { Component } from '@angular/core';

interface ContactLink {
  icon: string;
  url: string;
  title: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactLinks: ContactLink[] = [
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/mohammed-bendahrass-3b7328245/',
      title: 'LinkedIn'
    },
    {
      icon: 'github',
      url: 'https://github.com/MohammedBendahrass',
      title: 'GitHub'
    },
    {
      icon: 'place',
      url: 'https://maps.google.com',
      title: 'Address'
    },
    {
      icon: 'mail',
      url: 'mailto:mohammedbendahrass@gmail.com',
      title: 'Email'
    },
    {
      icon: 'phone',
      url: 'tel:+212643759170',
      title: 'Phone'
    }
  ];

  isMaterialIcon(iconName: string): boolean {
    return ['place', 'mail', 'phone'].includes(iconName);
  }
  
  getCustomIcon(iconName: string): string {
    const iconPaths: { [key: string]: string } = {
      linkedin: 'assets/icons/linkedin.svg',
      github: 'assets/icons/github.svg'
    };
    return iconPaths[iconName];
  }
  
}
