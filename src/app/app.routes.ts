import { Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
   {path:'', component: MaincontentComponent, title:'Portfolio of Webdeveloper Özkan Sarikaya'},
   {path:'imprint', component: ImprintComponent, title:'Imprint: Legale Notice'},
   {path:'privacy', component: PrivacyComponent, title:'Privacy Policy'}
];
