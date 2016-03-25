import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';

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
  directives: [ContactHeaderComponent]
})
export class ContactsApp {

  contacts:Array<Contact> = CONTACT_DATA;
}
