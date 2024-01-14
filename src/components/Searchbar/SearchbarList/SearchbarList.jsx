import css from './SearchbarList.module.css';

const SearchbarList = ({ items }) => {
  const elements = items.map(({ id, webformatURL, tags }) => (
    <li key={id} className={css.item}>
      <img className={css.images} src={webformatURL} alt={tags} id={id} />
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};
export default SearchbarList;
