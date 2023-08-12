import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../services/firebase.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    newsLetterForm!: FormGroup;

    constructor(private firebaseService: FirebaseService, private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.newsLetterForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        });
    }

    onSubmit() {
        if (this.newsLetterForm.valid) {
            console.log('form is valid');
            console.log('email is valid', this.newsLetterForm.value.email);
            this.firebaseService.addEmailToNewsletter(this.newsLetterForm.value.email).then(res => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Votre email a été ajouté avec succès'
                });
                this.newsLetterForm.reset();
            }, err => console.log(err));
        } else {
            this.newsLetterForm.markAllAsTouched();
        }

    }


}
