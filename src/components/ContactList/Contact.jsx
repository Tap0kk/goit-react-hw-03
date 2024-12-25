import s from './Contact.module.css';
import { FaRegUser } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.contactWrapper}>
      <div className={s.infoWrapper}>
        <p className={s.name}>
          <FaRegUser />
          {name}
        </p>
        <p className={s.number}>
          <FiPhone />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={s.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
