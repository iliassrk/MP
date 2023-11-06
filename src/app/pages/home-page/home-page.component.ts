import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
            email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
        });
    }

    onSubmit() {
        if (this.newsLetterForm.valid) {
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
