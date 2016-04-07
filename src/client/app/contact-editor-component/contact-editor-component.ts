import {Component, OnInit} from 'angular2/core';
import {CloneService} from '../clone-service/clone-service';
import {ContactsService} from '../contacts-service/contacts-service';
import {Contact} from '../models/contact';
import {Router, RouteParams} from 'angular2/router';


@Component({
  selector: 'contact-editor-component',
  templateUrl: 'app/contact-editor-component/contact-editor-component.html',
  styleUrls: ['app/contact-editor-component/contact-editor-component.css']
})
export class ContactEditorComponent implements OnInit {

  contact: Contact;

  constructor(private cloneService: CloneService<Contact>,
              private router: Router,
              private contactsService: ContactsService,
              private routeParams: RouteParams) {}

  ngOnInit() {
    this.contact = this.cloneService.createClone(this.contactsService.getContact(this.routeParams.get('id')));
  }

  cancel (contact: Contact) {
    this.cloneService.abortChanges();
    this.goToDetails(contact);
  }

  save (contact: Contact) {
    this.cloneService.commitChanges();
    this.goToDetails(contact);
  }

  private goToDetails (contact: Contact) {
    this.router.navigate(['/ContactDetail', {id: contact.id}]);
  }
}
