import { Component } from 'react';

import css from './SearchbarForm.module.css';

class SearchbarForm extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchbarForm;
