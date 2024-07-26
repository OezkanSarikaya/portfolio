import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  testimonials: {
    text: string;
    image: string;
    person: string;
}[] = [
    { text: 'Özkan has delivered outstanding performance in our team project. He possesses a deep understanding of JavaScript and has effectively utilized this knowledge to solve complex problems and develop innovative solutions. His ability to write clear and efficient code has significantly advanced our project. Özkan also excels in teamwork, contributing valuable ideas and actively supporting other team members. His expertise and dedication have been instrumental to the success of our project.', image: './assets/img/Mask group.png', person: 'Alain Soltau - Team Partner' },
    { text: 'I was fortunate to work with Özkan. He is a true Team-Player, which with his high level of javascript made teamwork easy and fun. He was always available for any questions or doubts no matter the day of the week or time. He is a person I would always work with if given the choice.', image: '', person: 'Raudel Gómez Smith - Team Partner' },
    { text: '', image: '', person: 'Peter' },
  
  ];
}
