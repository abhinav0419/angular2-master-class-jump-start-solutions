import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts-service/contacts-service';


@Component({
  selector: 'contact-detail-component',
  templateUrl: 'app/contact-detail-component/contact-detail-component.html',
  styleUrls: ['app/contact-detail-component/contact-detail-component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private contactsService: ContactsService, private routeParams: RouteParams) {}

  ngOnInit() {
    this.contact = this.contactsService.getContact(this.routeParams.get('id'));
  }
}
