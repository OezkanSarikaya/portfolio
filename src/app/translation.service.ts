import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})

export class TranslationService {

  public english = true;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');    
  }


  public switchLanguage(language: string): void {
    this.translate.use(language);
    this.english = !this.english;    
  }
}
