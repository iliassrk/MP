import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../services/firebase.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{

  contactForm!: FormGroup;

  disableBtn = false;

  constructor(private firebaseService: FirebaseService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      phone:new FormControl('', [Validators.required, Validators.pattern("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
      subject: new FormControl('',Validators.required),
      message: new FormControl('',Validators.required),
    });
  }

  onSubmit() {
    if (this.contactForm.valid){
        this.disableBtn = true;
        this.firebaseService.addContact(this.contactForm.value).then(res => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Formulaire a été envoyé avec succès'
          });
            this.contactForm.reset();
            this.disableBtn = false;
        }, err => {
          console.log(err);
          this.disableBtn = false;
        });
    }else {
      console.log('invalid form');
      this.disableBtn = false;
      this.contactForm.markAllAsTouched();
    }
  }
}
