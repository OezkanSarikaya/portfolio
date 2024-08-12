import { Component, inject } from '@angular/core';
import { Portfolio } from './../../interfaces/portfolio';
import { PortfolioItemComponent } from "./portfolio-item/portfolio-item.component";
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemComponent,TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  translate = inject(TranslationService);

  portfolios: Portfolio[] = [
    {
      headline: 'Join',
      subheadline: 'JavaScript | HTML | CSS | Firebase',
      text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      deutsch:'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      image:'./../../../assets/img/projectimages/join.png',
      githubUrl:'https://github.com/OezkanSarikaya/join',
      demoUrl:'https://join.oezkan-sarikaya.de/',
      index: 1
    },
    {
      headline: 'El Pollo Loco',
      subheadline: 'JavaScript | HTML | CSS',
      text: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken.',
      deutsch:'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Salsaflaschen zu finden, um gegen das Killerhuhn zu kämpfen.',
      image:'./../../../assets/img/projectimages/el-pollo-loco.png',
      githubUrl:'https://github.com/OezkanSarikaya/canvasGame',
      demoUrl:'https://el-pollo-loco.oezkan-sarikaya.de/',
      index: 2
    },
    {
      headline: 'Pokedex',
      subheadline: 'JavaScript | HTML | CSS | Api',
      text: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      deutsch:'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.',
      image:'./../../../assets/img/projectimages/pokedex.png',
      githubUrl:'https://github.com/OezkanSarikaya/pokedex',
      demoUrl:'https://pokedex.oezkan-sarikaya.de/',
      index: 3
    }, 
    {
      headline: 'Visualdenker',
      subheadline: 'WordPress | HTML | CSS | Responsive',
      text: 'A WordPress Site with template adjustments and different Plugins.',
      deutsch:'Eine WordPress-Site mit Template-Anpassungen und verschiedenen Plugins.',
      image:'./../../../assets/img/projectimages/visualdenker.png',
      githubUrl:'',
      demoUrl:'https://www.visualdenker.com/',
      index: 4
    }, 
  ];



}
