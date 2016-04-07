import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Contact} from '../models/contact';
import {CONTACT_DATA} from '../data/contact-data';


@Injectable()
export class ContactsService {

  private contacts:Array<Contact> = CONTACT_DATA;
  private API_ENDPOINT = 'http://localhost:4200/api';

  constructor(private http: Http) {}

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
                    .map(res => res.json())
                    .map(data => data.items);
  }

  getContact(id: any) {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
                    .map(res => res.json().item);
  }

  updateContact(contact: Contact) {
    let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`, JSON.stringify(contact), { headers });
  }
}
