import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { searchImages } from 'api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [imagesDetails, setImagesDetails] = useState({});
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const { data } = await searchImages(search, page);
        setImages(prevImages =>
          data.hits?.length ? [...prevImages, ...data.hits] : prevImages
        );
        setShowBtn(page < Math.ceil(data.totalHits / 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchImages();
    }
  }, [search, page]);

  const handleSearch = ({ search }) => {
    setSearch(search);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => setPage(prevPage => prevPage + 1);

  const showModal = ({ largeImageURL, webformatURL, tags }) => {
    setModalOpen(true);
    setImagesDetails({ largeImageURL, tags, webformatURL });
  };

  const closeModal = () => {
    setModalOpen(false);
    setImagesDetails({});
  };

  const isImages = Boolean(images.length);

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      {loading && <p>...Loading</p>}
      {isImages && <ImageGallery showModal={showModal} items={images} />}
      {showBtn && (
        <Button onClick={loadMore} type="button">
          Load more
        </Button>
      )}
      {modalOpen && (
        <Modal close={closeModal}>
          <img
            src={imagesDetails.largeImageURL}
            alt={imagesDetails.tags}
            width="70%"
          />
        </Modal>
      )}
    </>
  );
};

// export class App extends Component {
//   state = {
//     search: '',
//     images: [],
//     loading: false,
//     error: null,
//     page: 1,
//     modalOpen: false,
//     imagesDetails: {},
//     showBtn: false,
//   };

// async componentDidUpdate(_, prevState) {
//   const { search, page } = this.state;
//   if (search !== prevState.search || page !== prevState.page) {
//     this.fetchImeges();
//   }
// }

// async fetchImeges() {
//   const { search, page } = this.state;
//   try {
//     this.setState({
//       loading: true,
//     });
//     const { data } = await searchImages(search, page);
//     this.setState(({ images }) => ({
//       images: data.hits?.length ? [...images, ...data.hits] : images,
//       showBtn: page < Math.ceil(data.totalHits / 12),
//     }));
//   } catch (error) {
//     this.setState({
//       error: error.message,
//     });
//   } finally {
//     this.setState({
//       loading: false,
//     });
//   }

// }

// handleSearch = ({ search }) => {
//   this.setState({ search, images: [], page: 1 });
// };

// loadMore = () => {
//   this.setState(({ page }) => ({ page: page + 1 }));
// };

// showModal = ({ largeImageURL, webformatURL, tags }) => {
//   this.setState({
//     modalOpen: true,
//     imagesDetails: {
//       largeImageURL,
//       tags,
//       webformatURL,
//     },
//   });
// };

// closeModal = () => {
//   this.setState({
//     modalOpen: false,
//     imagesDetails: {},
//   });
// };
// render() {
//   const { handleSearch, loadMore, showModal, closeModal } = this;
//   const { images, loading, error, modalOpen, imagesDetails, showBtn } =
//     this.state;
// const isImages = Boolean(images.length);
// return (
//   <>
//     <Searchbar onSubmit={handleSearch} />
//     {error && <p>{error}</p>}
//     {loading && <p>...Loading</p>}
//     {isImages && <ImageGallery showModal={showModal} items={images} />}
//     {showBtn && (
//       <Button onClick={loadMore} type="button">
//         Load more
//       </Button>
//     )}
//     {modalOpen && (
//       <Modal close={closeModal}>
//         <img
//           src={imagesDetails.largeImageURL}
//           alt={imagesDetails.tags}
//           width="70%"
//         />
//       </Modal>
//     )}
//   </>
// );
