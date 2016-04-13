import {Component, OnInit} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';

@Component({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  template: `
    <contact-header-component></contact-header-component>
    <ul class="collection">
      <li class="collection-item avatar" *ngFor="#contact of contacts">
        <img [src]="contact.image" alt="" class="circle">
        <span class="title">{{contact.name}}</span>
      </li>
    </ul>
  `,
  providers: [ContactsService],
  directives: [ContactHeaderComponent]
})
export class ContactsApp implements OnInit {

  contacts:Array<Contact> = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
