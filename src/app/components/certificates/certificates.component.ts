// components/certificates/certificates.component.ts
import { Component, OnInit } from '@angular/core';
interface Certificate {
  title: string;
  pdfUrl: string;
  urlHttps: string;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent{
 
  certificates: Certificate[] = [
    {
      title: 'Play It Safe: Manage Security Risks',
      pdfUrl: 'assets/1.jpg',
      urlHttps: 'https://coursera.org/verify/T31A01TZ2U3N'
    },
    {
      title: 'Cybersecurity Fundamentals',
      pdfUrl: 'assets/4.jpg',
      urlHttps: 'https://www.credly.com/badges/578fee41-93c0-4f00-958e-9684bc618ef3/print'
    },
    {
      title: 'Ethical Hacker',
      pdfUrl: 'assets/2.jpg',
      urlHttps: 'https://www.credly.com/badges/cdc12a6d-82ac-46f5-8983-5688f5700a57/print'
    },
    {
      title: 'cybersécurité par Microsoft et LinkedIn',
      pdfUrl: 'assets/3.jpg',
      urlHttps: 'https://www.linkedin.com/learning/certificates/4a96a7eafe1db5d68fd79f2d854ac8e2bb4ae80a13d87fc8d7f6f566dd1e2959?trk=share_certificate'
    }
  ];
}
