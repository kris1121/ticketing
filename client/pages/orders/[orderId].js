import { useEffect, useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import useRequest from "../../hooks/use-request";
import Router from "next/router";

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id
    },
    onSuccess: () => Router.push('/orders')
  })

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    }
    findTimeLeft();
    const timer = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [order]);

  if (timeLeft < 0) return <div>Order expired</div>
  return (
    <div>
      Time left to pay: {timeLeft}
      <br />
      <StripeCheckout 
        token={({ id }) => doRequest({token: id})}
        stripeKey='pk_test_51OBxmUFpxAk9u3xwqHUq9JwSxpYlDZIt2q4cyvEPBgFvkgUmdOyRnsL9TixF5XgE16DtOVX4yYAIHfBzAsaAQUWE00vx1XE9Py'
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors? console.log(errors) : null}
    </div>
    
  )
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return {
    order: data
  };
}

export default OrderShow;