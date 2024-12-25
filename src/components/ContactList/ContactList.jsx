import Contact from './Contact';
import s from './ContactList.module.css';

const ContactList = ({ onContacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {onContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
