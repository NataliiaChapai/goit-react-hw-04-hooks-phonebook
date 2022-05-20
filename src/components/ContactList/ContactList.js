import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';

export default function ContactList({ formData, onDeleteBtnClick }) {
  return (
    <ul className={s.list}>
      {formData.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteBtnClick={onDeleteBtnClick}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};
