import { createPortal } from 'react-dom';

import CartItems from './CartItems.tsx';

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById('modal')! //there is an exclamation mark here because otherwise TypeScript would think that could be null. Because maybe we're not finding an element with that ID. But we know this element is exist and therefore we can add this exclamation mark here.
  );
}

//this JSX code is not injected into the dom where this cart component is being used for example next to the Header.tsx but instead some other place on the page. In this case into some element with an idea of modal which we can find in the index.html file.
