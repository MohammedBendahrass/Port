// components/projects/projects.component.ts
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  videoUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Cybersecurity Lab Project–Proxmox Virtual Environment',
      description: `Designed and deployed a virtual cybersecurity lab using Proxmox with multiple VLANs and network segmentation via pfSense.<br>
                    Configured security tools such as Security Onion, TheHive, Cortex, Nessus, and Wazuh for monitoring, incident response, and vulnerability scanning.<br>
                    Managed Dockerized web applications (WebGoat, BWAPP, DVWA) with Portainer and set up a penetration testing environment with Metasploit.<br>
                    Integrated Active Directory and Windows 10 in a simulated corporate environment, gaining hands-on experience in network security architecture, vulnerability management, and incident response.`,
      videoUrl: 'assets/part1.mp4'
    },
    {
      title: 'Cybersecurity Lab Project–Proxmox Virtual Environment Part 2',
      description: `Designed and deployed a virtual cybersecurity lab using Proxmox with multiple VLANs and network segmentation via pfSense.<br>
      Configured security tools such as Security Onion, TheHive, Cortex, Nessus, and Wazuh for monitoring, incident response, and vulnerability scanning.<br>
      Managed Dockerized web applications (WebGoat, BWAPP, DVWA) with Portainer and set up a penetration testing environment with Metasploit.<br>
      Integrated Active Directory and Windows 10 in a simulated corporate environment, gaining hands-on experience in network security architecture, vulnerability management, and incident response.`,
      videoUrl: 'assets/Part2.mp4'
    },
    {
      title: 'Cybersecurity Lab Project–Proxmox Virtual Environment Part 3',
      description: `Designed and deployed a virtual cybersecurity lab using Proxmox with multiple VLANs and network segmentation via pfSense.<br>
                    Configured security tools such as Security Onion, TheHive, Cortex, Nessus, and Wazuh for monitoring, incident response, and vulnerability scanning.<br>
                    Managed Dockerized web applications (WebGoat, BWAPP, DVWA) with Portainer and set up a penetration testing environment with Metasploit.<br>
                    Integrated Active Directory and Windows 10 in a simulated corporate environment, gaining hands-on experience in network security architecture, vulnerability management, and incident response.`,
      videoUrl: 'assets/Part3.mp4'
    },
    {
      title: 'Cybersecurity Lab Project–Proxmox Virtual Environment Part 4',
      description: `Designed and deployed a virtual cybersecurity lab using Proxmox with multiple VLANs and network segmentation via pfSense.<br>
                    Configured security tools such as Security Onion, TheHive, Cortex, Nessus, and Wazuh for monitoring, incident response, and vulnerability scanning.<br>
                    Managed Dockerized web applications (WebGoat, BWAPP, DVWA) with Portainer and set up a penetration testing environment with Metasploit.<br>
                    Integrated Active Directory and Windows 10 in a simulated corporate environment, gaining hands-on experience in network security architecture, vulnerability management, and incident response.`,
      videoUrl: 'assets/Part4.mp4'
    },
    {
      title: 'Cybersecurity Lab Project–Proxmox Virtual Environment Part 5',
      description: `Designed and deployed a virtual cybersecurity lab using Proxmox with multiple VLANs and network segmentation via pfSense.<br>
                    Configured security tools such as Security Onion, TheHive, Cortex, Nessus, and Wazuh for monitoring, incident response, and vulnerability scanning.<br>
                    Managed Dockerized web applications (WebGoat, BWAPP, DVWA) with Portainer and set up a penetration testing environment with Metasploit.<br>
                    Integrated Active Directory and Windows 10 in a simulated corporate environment, gaining hands-on experience in network security architecture, vulnerability management, and incident response.`,
      videoUrl: 'assets/Part5.mp4'
    },
    {
      title: 'Penetration Testing with Nessus',
      description: `Penetration Testing with Nessus
                    Conducted advanced vulnerability assessments on Metasploitable 2 and Windows Server 2022 using Nessus.<br>
                    Identified critical security vulnerabilities through comprehensive scans, leading to detailed reports with actionable remediation steps.<br>
                    Calculated CVSS Vectors to prioritize vulnerabilities based on severity and risk.<br>
                    Provided solutions to mitigate risks and improve the overall security posture of the systems.`,
      videoUrl: 'assets/Pentest.mp4'
    },
    {
      title: 'Design and implementation of a smart urban waste management system based on IoT',
      description: `This scientific project presents a sustainable development model, namely Design and implementation of an intelligent urban waste
                    management system based on IoT, which is opened and closed by an intelligent automatic system and measures the filling rate a trash
                    can (smart trash).<br>
                    Keywords: smart trash can, Arduino, ultrasonic sensor, SIM800L GSM/GPRS module.`,
      videoUrl: 'assets/iot.mp4'
    },
    {
      title: 'Integration of MLOps with Signature-based and Image-based Malware Detection Systems',
      description: `This project involves developing a comprehensive malware detection system that uses both
                    signature-based and image-based techniques to identify malware. The system uses advanced
                    algorithms and machine learning models to analyze and detect malware based on traditional
                    binary signatures and visual patterns derived from image-converted malware binaries. This dual
                    approach improves detection accuracy and provides robust defense against various types of
                    malware.`,
      videoUrl: 'assets/machinelearning.mp4'
    },
    {
      title: 'Building an IDS by using Snort',
      description: `Implementing and configuring an IDS requires careful planning and ongoing maintenance to adapt to evolving threats.<br> 
                    By integrating IDS with other security tools and continuously updating detection methods, organizations can significantly enhance their network security posture. `,
      videoUrl: 'assets/Snort.mp4'
    }
  ];
}
