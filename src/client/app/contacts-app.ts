import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';
import {ContactsListComponent} from './contacts-list-component/contacts-list-component';

@RouteConfig([
  {path: '/', component: ContactsListComponent, name: 'ContactsList', useAsDefault: true}
])
@Component({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  template: `
    <contact-header-component></contact-header-component>
    <router-outlet></router-outlet>
  `,
  providers: [ContactsService, ROUTER_PROVIDERS],
  directives: [ContactHeaderComponent, ROUTER_DIRECTIVES]
})
export class ContactsApp {}
