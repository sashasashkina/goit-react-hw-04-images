import { Component } from 'react';
import css from './Searchbar.module.css';
import { searchImages } from '../../api/api';
import SearchbarForm from './SearchbarForm/SearchbarForm';
import SearchbarList from './SearchbarList/SearchbarList';
import Button from 'components/Button/Button';

class Searchbar extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.setState({
        loading: true,
      });
      try {
        const { data } = await searchImages(search, page);
        this.setState(({ images }) => ({
          images: data.hits?.length ? [...images, ...data.hits] : images,
        }));
      } catch (error) {
        this.setState({
          error: error.message,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

  handleSearch = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { handleSearch, loadMore } = this;
    const { images, loading, error } = this.state;
    const isImages = Boolean(images.length);
    return (
      <>
        <SearchbarForm onSubmit={handleSearch} />
        {error && <p className={css.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {isImages && <SearchbarList items={images} />}
        {isImages && (
          <div className={css.loadMoreWrapper}>
            <Button onClick={loadMore} type="button">
              Load more
            </Button>
          </div>
        )}
      </>
    );
  }
}
export default Searchbar;
