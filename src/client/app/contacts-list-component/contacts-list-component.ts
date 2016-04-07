import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts-service/contacts-service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'contacts-list-component',
  templateUrl: 'app/contacts-list-component/contacts-list-component.html',
  styleUrls: ['app/contacts-list-component/contacts-list-component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsListComponent implements OnInit {

  contacts:Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
