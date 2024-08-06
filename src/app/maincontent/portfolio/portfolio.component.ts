import { Component } from '@angular/core';
import { Portfolio } from './../../interfaces/portfolio';
import { PortfolioItemComponent } from "./portfolio-item/portfolio-item.component";
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolios: Portfolio[] = [
    {
      headline: 'Join',
      subheadline: 'Angular | TypeScript | HTML | CSS | Firebase',
      text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image:'./../../../assets/img/projectimages/join.png',
      githubUrl:'https://github.com/OezkanSarikaya/join',
      demoUrl:'https://oezkan-sarikaya.developerakademie.net/join/',
      index: 1
    },
    {
      headline: 'El Pollo Loco',
      subheadline: 'JavaScript | HTML | CSS',
      text: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken.',
      image:'./../../../assets/img/projectimages/el-pollo-loco.png',
      githubUrl:'https://github.com/OezkanSarikaya/canvasGame',
      demoUrl:'https://oezkan-sarikaya.developerakademie.net/el-pollo-loco/',
      index: 2
    },
    {
      headline: 'Pokedex',
      subheadline: 'JavaScript | HTML | CSS | Api',
      text: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image:'./../../../assets/img/projectimages/pokedex.png',
      githubUrl:'https://github.com/OezkanSarikaya/pokedex',
      demoUrl:'https://oezkan-sarikaya.developerakademie.net/pokedex/',
      index: 3
    }, 
    {
      headline: 'Visualdenker',
      subheadline: 'WordPress | HTML | CSS | Responsive',
      text: 'A WordPress Site with template adjustments and different Plugins.',
      image:'./../../../assets/img/projectimages/visualdenker.png',
      githubUrl:'',
      demoUrl:'https://www.visualdenker.com/',
      index: 4
    }, 
  ];



}
