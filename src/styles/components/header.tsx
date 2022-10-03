import { styled } from '..';

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
});

export const CartButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

export const CartButton = styled('button', {
  padding: 12,
  borderRadius: 6,
  backgroundColor: '$gray800',

  '&:hover': {
    filter: 'brightness(110%)',
    cursor: 'pointer',
  },
});

export const CartBadge = styled('div', {
  width: 27,
  height: 27,
  backgroundColor: '$green500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  borderRadius: 24,
  border: '3px solid $gray900',
  position: 'absolute',
  transform: 'translate(10px, -10px)',
  zIndex: 1,

  p: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },
});
