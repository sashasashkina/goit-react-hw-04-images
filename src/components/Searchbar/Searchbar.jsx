import { Component } from 'react';
import css from './Searchbar.module.css';
import { getAllImages } from '../../api/api';
import SearchbarForm from './SearchbarForm/SearchbarForm';
import SearchbarList from './SearchbarList/SearchbarList';

class Searchbar extends Component() {
  state = {
    images: [],
    loading: false,
    error: null,
  };
  render() {
    const { images, loading, error } = this.state;

    return (
      <>
        <SearchbarForm />
        {error && <p className={css.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {Boolean(images.length) && <SearchbarList items={images} />}
      </>
    );
  }
}
export default Searchbar;
