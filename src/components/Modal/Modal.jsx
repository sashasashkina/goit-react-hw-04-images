import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ close, children }) => {
  const closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  const handleKeyBoard = event => {
    if (event.code === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyBoard);

    return () => document.removeEventListener('keydown', handleKeyBoard);
  });

  return createPortal(
    <div onClick={closeModal} className={css.overlay}>
      {children}
    </div>,
    modalRoot
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyBoard);
//   }
//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyBoard);
//   }

//   handleKeyBoard = event => {
//     if (event.code === 'Escape') {
//       this.props.close();
//     }
//   };
//   closeModal = ({ target, currentTarget }) => {
//     if (target === currentTarget) {
//       this.props.close();
//     }
//   };
//   render() {
//     const { closeModal } = this;
//     const { children } = this.props;
//     return createPortal(
//       <div onClick={closeModal} className={css.overlay}>
//         {children}
//       </div>,
//       modalRoot
//     );
//   }
// }
