import { useState } from 'react';
import axios from 'axios';
import closeIcon from '../../assets/close.svg';
import { useCart } from '../../hooks/useCart';
import {
  CartContainer,
  CartProductsContainer,
  CartProduct,
  CartProductImageContainer,
  CartFooter,
} from '../../styles/components/cart';
import Image from 'next/future/image';

interface Props {
  onClose: () => void;
}

export function Cart({ onClose }: Props) {
  const { products, totalValue, removeProductFromCart } = useCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        pricesId: products.map((p) => p.defaultPriceId),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout!');
    }
  }

  return (
    <CartContainer>
      <Image src={closeIcon} alt='' width={24} height={24} onClick={onClose} />
      <h2>Sacola de compras</h2>

      <CartProductsContainer>
        {products.map((product) => (
          <CartProduct key={product.id}>
            <CartProductImageContainer>
              <Image src={product.imageUrl} width={95} height={95} alt='' />
            </CartProductImageContainer>

            <div>
              <p>{product.name}</p>
              <p>
                <b>{product.formattedPrice}</b>
              </p>
              <button onClick={() => removeProductFromCart(product.id)}>Remover</button>
            </div>
          </CartProduct>
        ))}
      </CartProductsContainer>

      <CartFooter>
        <div>
          <p>Quantidade</p>
          <p>{products.length} Itens</p>
        </div>
        <div>
          <p>Valor total</p>
          <p>{totalValue}</p>
        </div>
      </CartFooter>

      <button
        disabled={products.length === 0 || isCreatingCheckoutSession}
        onClick={handleBuyButton}
      >
        Finalizar compra
      </button>
    </CartContainer>
  );
}
