package com.aravind.online_grocery_store.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aravind.online_grocery_store.Entity.Contact;
import com.aravind.online_grocery_store.Repository.ContactRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public Optional<Contact> updateContact(Long id, Contact updatedContact) {
        return contactRepository.findById(id).map(existingContact -> {
            existingContact.setName(updatedContact.getName());
            existingContact.setEmail(updatedContact.getEmail());
            existingContact.setMessage(updatedContact.getMessage());
            return contactRepository.save(existingContact);
        });
    }

    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}
