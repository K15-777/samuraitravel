const stripe = Stripe('pk_test_51U2WpFFYQtaLKMjyhaQBtv8BXj5u3qnH3QSgInfLujm2Of868Oig65XSe1scB12kGOyKQXVEqpuW2DQVWhBjMIu700xM5qe1Mt');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});