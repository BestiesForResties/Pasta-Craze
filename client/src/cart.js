import React, {useState} from 'react';

const Cart = ({ selectedItems = [] }) => {
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleRemoveItem = (id) => {
    // Implement item removal logic here
    // Update the selectedItems array by removing the item with the given id
    const updatedItems = selectedItems.filter((item) => item.id !== id);
    // Pass the updatedItems back to the Menu component to reflect the changes there
    // You may need to use a callback function or another state management approach
    console.log('Updated items:', updatedItems);
  };

  const cartTotal = selectedItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Implement checkout logic, e.g., payment processing
    // You can simulate order processing here
    setOrderCompleted(true);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {selectedItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
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