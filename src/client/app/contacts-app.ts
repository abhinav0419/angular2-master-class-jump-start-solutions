import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';

@Component({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  template: `
    <contact-header-component></contact-header-component>
    <ul class="collection">
      <li class="collection-item avatar">
        <img [src]="contact.image" alt="" class="circle">
        <span class="title">{{contact.name}}</span>
      </li>
    </ul>
  `,
  directives: [ContactHeaderComponent]
})
export class ContactsApp {

  contact: Contact = {
    id: 7,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/6.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  };
}
