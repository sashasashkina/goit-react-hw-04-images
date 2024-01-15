import css from './Button.module.css';

export const Button = ({ onClick, type = 'submit', children }) => {
  return (
    <button onClick={onClick} type={type} className={css.btn}>
      {children}
    </button>
  );
};
