import { useState } from 'react';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>
        </button>

        <input
          onChange={e => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search images and photos"
          required
          name="search"
        />
      </form>
    </header>
  );
};

// export class Searchbar extends Component {
//   state = {
//     search: '',
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     this.setState({
//       search: '',
//     });
//   };

//   render() {
//     const { handleChange, handleSubmit } = this;
//     const { search } = this.state;

//     return (
//       <header className={css.searchbar}>
//         <form onSubmit={handleSubmit} className={css.form}>
//           <button type="submit" className={css.button}>
//             <span className={css.label}>Search</span>
//           </button>

//           <input
//             onChange={handleChange}
//             value={search}
//             type="text"
//             placeholder="Search images and photos"
//             required
//             name="search"
//           />
//         </form>
//       </header>
//     );
//   }
// }
