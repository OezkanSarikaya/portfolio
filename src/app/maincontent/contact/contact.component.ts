import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule,TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  translate = inject(TranslationService);
[x: string]: any;


  http = inject(HttpClient)
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  };

  mailTest = false;
  sent = false;
  

  post = {
    endPoint: 'https://oezkan-sarikaya.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

 

  onSubmit(ngForm: NgForm) {

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {this.sent = true;
            setTimeout(() => {
              this.sent = false;
            }, 2000);
          }
        });
    } 
    else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      console.info('sending post complete');
      this.sent = true;
      setTimeout(() => {
        this.sent = false;
      }, 2000);
    }
  }
}
