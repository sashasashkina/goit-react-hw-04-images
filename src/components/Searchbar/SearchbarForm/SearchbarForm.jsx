import { Component } from 'react';

import css from './SearchbarForm.module.css';

class SearchbarForm extends Component() {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({
      search: '',
    });
  };
  render() {
    const { handleChange, handleSubmit } = this.state;
    const { search } = this.state;
    return (
      <header className={css.searchbar}>
        <form onSubmit={handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            onChange={handleChange}
            value={search}
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
