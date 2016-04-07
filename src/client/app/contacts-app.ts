import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';
import {CloneService} from './clone-service/clone-service';
import {ContactsListComponent} from './contacts-list-component/contacts-list-component';
import {ContactDetailComponent} from './contact-detail-component/contact-detail-component';
import {ContactEditorComponent} from './contact-editor-component/contact-editor-component';
import 'rxjs/add/operator/map';

@RouteConfig([
  {path: '/', component: ContactsListComponent, name: 'ContactsList', useAsDefault: true},
  {path: '/contact/:id', component: ContactDetailComponent, name: 'ContactDetail'},
  {path: '/contact/:id/edit', component: ContactEditorComponent, name: 'ContactEditor'}
])
@Component({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  template: `
    <contact-header-component></contact-header-component>
    <router-outlet></router-outlet>
  `,
  providers: [ContactsService, CloneService, ROUTER_PROVIDERS, HTTP_PROVIDERS],
  directives: [ContactHeaderComponent, ROUTER_DIRECTIVES]
})
export class ContactsApp {}
