import css from './form.module.css';

import PropTypes from 'prop-types';

export default function Form({ onSubmit, onChange }) {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </label>
      <label className={css.label}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
        />
      </label>
      <button className={css.button}>Add contact</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
