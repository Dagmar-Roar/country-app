import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  constructor(public navCtrl: NavController, public contacts: Contacts) {
    
    
  }
  contactList = [];
  
     getContacts(): void {
       this.contacts.find(
         ["displayName", "phoneNumbers","photos"],
         {multiple: true, hasPhoneNumber: true}
         ).then((contacts) => {
         console.log(contacts);
         for (var i=0 ; i < contacts.length; i++){
           if(contacts[i].displayName !== null) {
             var contact = {};
             contact["name"]   = contacts[i].displayName;
             contact["number"] = contacts[i].phoneNumbers[0].value;
             if(contacts[i].photos != null) {
              console.log(contacts[i].photos);
               contact["image"]  = contacts[i].photos[0].value;
               console.log(contact);
               this.contactList.push(contact);
             }
           }
         }
      });
    }
  }
