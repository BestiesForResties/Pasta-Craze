import React, {useState, useEffect} from 'react';
import fetchAPI from './helpers/fetchApi';

const endpoint = {
    getCart: '/users/{userId}/cart',
    removeItem: '/item/{itemId}/remove-item/{userId}',
    closeCart: '/cart/{userId}/'
}

const requestMethod = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
}

//userId can be set with login but for now we are only using user 1
const params = {
    userId: '1',
    itemId: null,
    category: null,
}

const Cart = ({ selectedItems = [] }) => {
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

    const getCart = async () => {
        const cart = await fetchAPI({
            method: requestMethod.get,
            endpoint: endpoint.getCart,
            urlParams: params
            }).catch((error) => {
            console.log(error);
        });
        setCartItems(cart.items);
        console.log('cartItems:', cartItems);
    };

  //remove Item add to backend and implement here.
  const handleRemoveItem = async (id) => {
    params.itemId = id
    
    await fetchAPI({
        method: requestMethod.delete,
        endpoint: endpoint.removeItem,
        urlParams: params
        }).catch((error) => {
        console.log(error);
    });
    getCart();
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = async () => {
    await fetchAPI({
        method: requestMethod.delete,
        endpoint: endpoint.closeCart,
        urlParams: params
        }).catch((error) => {
        console.log(error);
    });
    setOrderCompleted(true);
  };

  useEffect(() => {
    getCart()
  },[]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span><br/>
          <span>${item.price.toFixed(2)}</span><br/>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <div>
        <strong>Total: ${cartTotal.toFixed(2)}</strong>
      </div>
      <div>
        <h2>Checkout</h2>
        <form>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
            }
          />
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={(e) =>
              setPaymentInfo({
                ...paymentInfo,
                expirationDate: e.target.value
              })
            }
          />
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
          />
          <button onClick={handleCheckout}>Checkout</button>
        </form>
      </div>
      {orderCompleted && (
        <div>
          <h2>Order Completed</h2>
          <p>Order has been completed. Check SMS for pickup confirmation.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;