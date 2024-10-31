// components/skills/skills.component.ts
import { Component } from '@angular/core';

interface Skill {
  category: string;
  technologies: string;
  proficiency: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  
}
