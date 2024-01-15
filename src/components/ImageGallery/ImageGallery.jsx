import css from './ImageGallery.module.css';

export const ImageGallery = ({ showModal, items }) => {
  const elements = items.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} className={css.item}>
      <img
        onClick={() => showModal({ webformatURL, tags, largeImageURL })}
        className={css.images}
        src={webformatURL}
        alt={tags}
        id={id}
      />
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};
