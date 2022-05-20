import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ name, onFilterInput }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={name}
        onChange={onFilterInput}
      />
    </label>
  );
}

Filter.propTypes = {
  name: PropTypes.string,
  onFilterInput: PropTypes.func.isRequired,
};