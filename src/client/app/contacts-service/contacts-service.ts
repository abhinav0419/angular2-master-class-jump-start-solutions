import {Injectable} from 'angular2/core';
import {Contact} from '../models/contact';
import {CONTACT_DATA} from '../data/contact-data';


@Injectable()
export class ContactsService {

  private contacts:Array<Contact> = CONTACT_DATA;

  getContacts() {
    return this.contacts;
  }
}
