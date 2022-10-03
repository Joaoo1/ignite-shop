import { styled } from '..';

export const CartContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  maxWidth: 480,
  backgroundColor: '$gray800',
  zIndex: 2,
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',
  padding: 48,

  '> img': {
    alignSelf: 'flex-end',
    transform: 'translate(24px, -24px)',
    cursor: 'pointer',
  },

  h2: {
    fontSize: '$lg',
    lineHeight: 1.6,
    color: '$gray100',
  },

  '> button': {
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    marginTop: 55,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
});

export const CartProductsContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginTop: 32,
});

export const CartProduct = styled('div', {
  display: 'flex',
  gap: 20,

  'p, b': {
    fontSize: '$lg',
    lineHeight: 1.6,
  },
  p: {
    color: '$gray300',
  },
  b: {
    color: '$gray100',
  },
  button: {
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$green500',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(120%)',
    },
  },
});

export const CartProductImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
});

export const CartFooter = styled('footer', {
  div: {
    display: 'flex',
    justifyContent: 'space-between',

    'p:last-child': {
      fontSize: 18,
      lineHeight: 1.6,
    },
  },

  'div:last-child': {
    marginTop: 3,
    p: {
      fontWeight: 'bold',
    },
  },
});
