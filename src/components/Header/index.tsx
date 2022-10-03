import { useCart } from '../../hooks/useCart';
import Image from 'next/future/image';
import logoImg from '../../assets/logo.svg';
import cartImg from '../../assets/cart.svg';

import {
  HeaderContainer,
  CartButton,
  CartBadge,
  CartButtonContainer,
} from '../../styles/components/header';

interface Props {
  onCartButtonClick: () => void;
}

export function Header({ onCartButtonClick }: Props) {
  const { products } = useCart();

  return (
    <HeaderContainer>
      <Image src={logoImg} alt='' />
      <CartButtonContainer>
        <CartBadge>
          <p>{products.length}</p>
        </CartBadge>
        <CartButton onClick={onCartButtonClick}>
          <Image src={cartImg} alt='' />
        </CartButton>
      </CartButtonContainer>
    </HeaderContainer>
  );
}
