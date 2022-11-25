import React from 'react'

const Cart = () => {
  return (

    <aside className="open-cart">
        <div className="cart-details-container">
          <h4 className="cart-title">CART</h4>
          <button className="nav-cart-button">Cart button</button>
          <button className="exit-cart-button">exit button</button>
        </div>
        <div className="item-details-container">
          <img src="placeholder" alt="placeholder" className="item-image" />
          <h5 className="item-name">Product name</h5>
          <p className="item-size">size: 8.0</p>
          <span>
            <button className="item-decrement-btn">-</button>
            <p className="item-amount">01</p>
            <button className="item-increment-btn">+</button>
          </span>
          <h6 className="item-price">R1200</h6>
          <button className="remove-item-btn">trashcan-svg</button>
        </div>
        <div className="cart-process-container">
          <h4 className="cart-total-price">TOTAL: items total</h4>
          <button className="place-order-btn">Place an order</button>
          <button className="continue-shopping-btn">Continue shopping</button>
        </div>
      </aside>
  )
}

export default Cart