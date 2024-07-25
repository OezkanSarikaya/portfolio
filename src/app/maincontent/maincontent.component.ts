import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [HeroComponent,AboutmeComponent,SkillsComponent,PortfolioComponent,ReferencesComponent,ContactComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
