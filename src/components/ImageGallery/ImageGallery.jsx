import { Component } from 'react';
import css from './ImageGallery.module.css';
import { getAllImages } from '../../api/api';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { data } = await getAllImages();
      console.log(data);

      this.setState({
        images: data.hits?.length ? data.hits : [],
      });
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

  render() {
    const { images, loading, error } = this.state;
    const elements = images.map(({ id, webformatURL, tags }) => (
      <li key={id} className={css.item}>
        <img className={css.images} src={webformatURL} alt={tags} id={id} />
      </li>
    ));
    return (
      <>
        {error && <p className={css.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {Boolean(images.length) && <ul className={css.list}>{elements}</ul>}
      </>
    );
  }
}
export default ImageGallery;
