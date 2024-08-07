import { Component } from '@angular/core';
import { Reference } from './../../interfaces/reference';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  testimonials: Reference[] = [
    {
      text: 'Özkan has delivered outstanding performance in our team project. He possesses a deep understanding of JavaScript and has effectively utilized this knowledge to solve complex problems and develop innovative solutions. His ability to write clear and efficient code has significantly advanced our project. Özkan also excels in teamwork, contributing valuable ideas and actively supporting other team members. His expertise and dedication have been instrumental to the success of our project.',
      image: './assets/img/alain.png',
      person: 'Alain Soltau - Team Partner',
    },
    {
      text: 'I was fortunate to work with Özkan. He is a true Team-Player, which with his high level of javascript made teamwork easy and fun. He was always available for any questions or doubts no matter the day of the week or time. He is a person I would always work with if given the choice.',
      image: './assets/img/raudel.png',
      person: 'Raudel Gómez Smith - Team Partner',
    },
    {
      text: 'Durch seine kreativen Ideen und Programmierkenntnisse, hatte das Unternehmen einen Wettbewerbsvorteil und ein Alleinstellungsmerkmal.',
      image: './assets/img/Mask group.png',
      person: 'Peter',
    },
  ];

  currentText = this.testimonials[0].text;
  currentPerson = this.testimonials[0].person;
  currentImage= this.testimonials[0].image;
  currentPostId = 0;
  // currentAnimate = "";

  navigate(postId: number) {
    this.currentText = this.testimonials[postId].text;
    this.currentPerson = this.testimonials[postId].person;
    this.currentImage = this.testimonials[postId].image;
    this.currentPostId = postId;
  }

  next() {
    // this.currentAnimate = "";
    if (this.currentPostId >= this.testimonials.length-1) {this.currentPostId=-1}
    let postId = this.currentPostId+1;
    this.currentText = this.testimonials[postId].text;
    this.currentPerson = this.testimonials[postId].person;
    this.currentImage = this.testimonials[postId].image;
    this.currentPostId = postId;
    // this.currentAnimate = "animate__fadeIn";
  }

  back() {
    // this.currentAnimate = "";
    if (this.currentPostId == 0) {
      this.currentPostId = this.testimonials.length;
    }
    let postId = this.currentPostId - 1;
    this.currentText = this.testimonials[postId].text;
    this.currentPerson = this.testimonials[postId].person;
    this.currentImage = this.testimonials[postId].image;
    this.currentPostId = postId;
    // this.currentAnimate = "animate__fadeIn";
  }
}
