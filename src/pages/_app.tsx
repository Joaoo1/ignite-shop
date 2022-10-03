import { useState } from 'react';
import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

import { CartContextProvider } from '../contexts/CartContext';
import { Cart } from '../components/Cart';
import { Container } from '../styles/pages/app';
import { Header } from '../components/Header';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  const [isCartOpen, setCartOpen] = useState(false);

  function handleCartButton() {
    setCartOpen((state) => !state);
  }

  function handleCloseCartButton() {
    setCartOpen(false);
  }

  return (
    <CartContextProvider>
      <Container>
        <Header onCartButtonClick={handleCartButton} />

        <Component {...pageProps} />

        {isCartOpen && <Cart onClose={handleCloseCartButton} />}
      </Container>
    </CartContextProvider>
  );
}

export default MyApp;
