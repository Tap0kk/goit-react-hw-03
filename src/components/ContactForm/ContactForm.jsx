import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimal 3 symbols!')
      .max(50, 'Maximum 50 symbols!')
      .required('This is required!'),
    number: Yup.string()
      .min(3, 'Minimal 3 symbols!')
      .max(50, 'Maximum 50 symbols!')
      .required('This is required!'),
  });

  const handleSubmit = (values, actions) => {
    onAddContact(values.name, values.number);
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
        initialValues={{
          name: '',
          number: '',
        }}
      >
        <Form className={s.formWrapper}>
          <label className={s.labelWrapper}>
            <span className={s.name}>Name:</span>
            <Field type="text" name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.labelWrapper}>
            <span className={s.number}>Number:</span>
            <Field type="text" name="number" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
