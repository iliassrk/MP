import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private angularFirestore: AngularFirestore) {
  }


  addContact(contact: Contact) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('contacts').add(contact).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }


  addEmailToNewsletter(email: string) {
    return new Promise((resolve, reject) => {
      this.angularFirestore.collection('newsletter').add({email}).then(res => {
        resolve(res);
      }, err => reject(err));
    });


  }
}
