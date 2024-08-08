import { Component,Input } from '@angular/core';
import { Portfolio } from '../../../interfaces/portfolio';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss'
})
export class PortfolioItemComponent {
  @Input() singleportfolio!: Portfolio; // decorate the property with @Input()

  constructor (public translate:TranslationService) {

  }
}
