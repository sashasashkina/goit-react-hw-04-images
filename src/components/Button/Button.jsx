import css from './Button.module.css';

const Button = ({ onclick, type = 'submit', children }) => {
  return (
    <button onClick={onclick} type={type} className={css.btn}>
      {children}
    </button>
  );
};
export default Button;
