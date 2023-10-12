import Contacts from '../dao/factory.js';
import ContactRepository from './contactsRepository.js';

export const contactsService = new ContactRepository(new Contacts());