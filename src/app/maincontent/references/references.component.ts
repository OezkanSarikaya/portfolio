import { Component, inject } from '@angular/core';
import { Reference } from './../../interfaces/reference';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  translate = inject(TranslationService);


  testimonials: Reference[] = [
    {
      text: 'Özkan has delivered outstanding performance in our team project. He possesses a deep understanding of JavaScript and has effectively utilized this knowledge to solve complex problems and develop innovative solutions. His ability to write clear and efficient code has significantly advanced our project. Özkan also excels in teamwork, contributing valuable ideas and actively supporting other team members. His expertise and dedication have been instrumental to the success of our project.',
      deutsch:'Özkan hat in unserer Teamarbeit herausragende Leistungen erbracht. Er verfügt über ein tiefgehendes Verständnis von JavaScript und hat dieses Wissen effektiv genutzt, um komplexe Probleme zu lösen und innovative Lösungen zu entwickeln. Seine Fähigkeit, klare und effiziente Codezeilen zu schreiben, hat unser Projekt erheblich vorangebracht. Özkan arbeitet zudem sehr gut im Team, bringt wertvolle Ideen ein und unterstützt andere Teammitglieder tatkräftig. Seine Expertise und sein Engagement haben wesentlich zum Erfolg unseres Projekts beigetragen.',
      image: './assets/img/alain.png',
      person: 'Alain Soltau - Team Partner',
    },
    {
      text: 'I was fortunate to work with Özkan. He is a true Team-Player, which with his high level of javascript made teamwork easy and fun. He was always available for any questions or doubts no matter the day of the week or time. He is a person I would always work with if given the choice.',
      deutsch:'Ich hatte das Glück, mit Özkan zu arbeiten. Er ist ein echter Teamplayer, der mit seinem hohen Niveau an Javascript die Teamarbeit einfach und angenehm machte. Er war immer für alle Fragen oder Zweifel verfügbar, egal an welchem Wochentag oder zu welcher Uhrzeit. Mit ihm würde ich immer zusammenarbeiten, wenn ich die Wahl hätte. ',
      image: './assets/img/raudel.png',
      person: 'Raudel Gómez Smith - Team Partner',
    },
    {
      text: 'Özkan created a fantastic WordPress website for me. He provided excellent advice when choosing the theme and perfectly executed my ideas. The result exceeded my expectations. I continue to rely on his outstanding support through a service contract, which ensures that my website remains up-to-date and well-maintained. I am very satisfied and can recommend him without reservation.',
      deutsch:'Özkan hat für mich eine großartige WordPress-Webseite erstellt. Bei der Auswahl des Themes hat er mich hervorragend beraten und meine Wünsche perfekt umgesetzt. Das Ergebnis hat meine Erwartungen übertroffen. Auch den laufenden Support nehme ich über einen Servicevertrag in Anspruch, sodass meine Webseite stets aktuell und gut gepflegt bleibt. Ich bin sehr zufrieden und kann ihn uneingeschränkt weiterempfehlen.',
      image: './assets/img/andreas-pfaff-profilbild-grey-bg.png',
      person: 'Andreas Pfaff - Visualdenker.com',
    },
  ];

  animate = false;

  // testimonialText = document.getElementById('testimonialText');
  currentText = this.testimonials[0].text;
  currentPerson = this.testimonials[0].person;
  currentImage= this.testimonials[0].image;
  currentPostId = 0;


  /* navigate with the dots */
  navigate(postId: number) {
    this.currentText = this.testimonials[postId].text;
    this.currentPerson = this.testimonials[postId].person;
    this.currentImage = this.testimonials[postId].image;
    this.currentPostId = postId;
    this.triggerAnimation();    
  }

  next() {
    if (this.currentPostId >= this.testimonials.length-1) {this.currentPostId=-1}
    let postId = this.currentPostId+1;
    this.currentText = this.testimonials[postId].text;
    this.currentPerson = this.testimonials[postId].person;
    this.currentImage = this.testimonials[postId].image;
    this.currentPostId = postId;
    this.triggerAnimation(); 
  }

  back() {  
    if (this.currentPostId == 0) {
      this.currentPostId = this.testimonials.length;
    }
    let postId = this.currentPostId - 1;
    this.currentText = this.testimonials[postId].text;
    this.currentPerson = this.testimonials[postId].person;
    this.currentImage = this.testimonials[postId].image;
    this.currentPostId = postId;
    this.triggerAnimation();
  }

  triggerAnimation() {
    this.animate = false; // Reset animation
    setTimeout(() => {
      this.animate = true;
    }, 0); // Trigger animation
  }
}
