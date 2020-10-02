import React from 'react'

const PlaceOrder = ({ addOrder, newName, handleNameChange, newEmail, handleEmailChange, newOrder, handleOrderChange, orderId }) => {
    return (
        <>
            <div className="order-now">Place Order</div>
                <form class="order-form" onSubmit={addOrder}>
                  Name: <input className="input-small"
                      value={newName}
                      onChange={handleNameChange}    
                  />
                  Email: <input className="input-small"
                      value={newEmail}
                      onChange={handleEmailChange}    
                  />
                  Order Items: <input className="input-small"
                      value={newOrder}
                      onChange={handleOrderChange}    
                  />
                  <button className="submit-button" type="submit">Place Order</button>
                </form>
                <p>Order Id of Order Placed: {orderId}</p>
        </>
    )
}

export default PlaceOrder