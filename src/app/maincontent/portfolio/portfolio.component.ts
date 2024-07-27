import { Component } from '@angular/core';
import { Portfolio } from './../../interfaces/portfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
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
      demoUrl:'https://oezkan-sarikaya.developerakademie.net/join/'
    },
    {
      headline: 'El Pollo Loco',
      subheadline: 'JavaScript | HTML | CSS',
      text: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken.',
      image:'./../../../assets/img/projectimages/el-pollo-loco.png',
      githubUrl:'https://github.com/OezkanSarikaya/canvasGame',
      demoUrl:'https://oezkan-sarikaya.developerakademie.net/el-pollo-loco/'
    },

    {
      headline: 'Pokedex',
      subheadline: 'JavaScript | HTML | CSS | Api',
      text: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image:'./../../../assets/img/projectimages/pokedex.png',
      githubUrl:'https://github.com/OezkanSarikaya/pokedex',
      demoUrl:'https://oezkan-sarikaya.developerakademie.net/pokedex/'
    }, 
  ];

  currentHeadline = this.portfolios[0].headline;
  currentSubheadline = this.portfolios[0].subheadline;
  currentText = this.portfolios[0].text;
  currentImage = this.portfolios[0].image;
  currentGithubUrl = this.portfolios[0].githubUrl;
  currentDemoUrl = this.portfolios[0].demoUrl;

}
