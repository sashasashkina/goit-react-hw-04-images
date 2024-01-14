import { Component } from 'react';
import css from './Searchbar.module.css';
// import { getAllImages } from '../../api/api';
import SearchbarForm from './SearchbarForm/SearchbarForm';
import SearchbarList from './SearchbarList/SearchbarList';

class Searchbar extends Component() {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
  };

  handleSearch = ({ search }) => {
    this.setState({ search });
  };
  render() {
    const { handleSearch } = this;
    const { images, loading, error } = this.state;

    return (
      <>
        <SearchbarForm onSubmit={handleSearch} />
        {error && <p className={css.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {Boolean(images.length) && <SearchbarList items={images} />}
      </>
    );
  }
}
export default Searchbar;
