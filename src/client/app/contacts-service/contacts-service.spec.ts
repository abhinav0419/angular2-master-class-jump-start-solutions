import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ContactsService} from './contacts-service';


describe('ContactsService Service', () => {

  beforeEachProviders(() => [ContactsService]);


  it('should ...', inject([ContactsService], (service: ContactsService) => {

  }));

});
