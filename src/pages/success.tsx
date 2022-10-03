import { GetServerSideProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import { ImageContainer, Images, SuccessContainer } from '../styles/pages/success';

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite shop</title>

        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <Images>
          {products.map((product) => (
            <ImageContainer key={product.id}>
              <Image src={product.imageUrl} width={120} height={110} alt='' />
            </ImageContainer>
          ))}
        </Images>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de <strong>{products.length}</strong>{' '}
          camisa{products.length > 1 && 's'} já está a caminho da sua casa.
        </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details.name;
  const products = session.line_items.data.map((item) => item.price.product as Stripe.Product);

  return {
    props: {
      customerName,
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
      })),
    },
  };
};
