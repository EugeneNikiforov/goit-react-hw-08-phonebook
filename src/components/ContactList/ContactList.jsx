import React from 'react';
import { useSelector } from 'react-redux';
import css from './ContactList.module.scss';
import ContactElement from '../ContactElement/ContactElement';

const ContactList = () => {
    const { contacts, error } = useSelector((state) => state.contactsData);
    const filter = useSelector((state) => state.contactsData.filter);

    const filteredContacts = contacts.filter(
        contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <section className={css.sectionList}>
            {Boolean(error).length > 0 && (
                <p className={css.notification}>Upss, Some error occured... {error}</p>
            )}
            <ul className={css.list}>
                {filteredContacts.map(({ id, name, number }) => {
                    return <ContactElement name={name} number={number} key={id} id={id} />
                })}
            </ul>
        </section>
    )
}

export default ContactList;