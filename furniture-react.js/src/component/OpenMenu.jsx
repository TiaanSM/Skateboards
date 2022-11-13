import React from 'react'
import '../component/OpenMenu.css';

const OpenMenu = () => {

  /*
  <div className="backdrop">

                <div className="cart-card" key={details.id}>
                  <div className="item-details">
                    <img src={details.image} alt="" width="98px" height="98px" />
                    <h4 className="item-name">{details.design}</h4>
                    <p className="item-size">{details.size}</p>
                    <h6 className="item-price">{details.price}</h6>
                    <button className="exit-modal" onClick={() => setModalDisplay(false)}>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2538 10.9594L0 21.2132L0.707107 21.9203L10.9609 11.6665L21.2148 21.9203L21.9219 21.2132L11.668 10.9594L21.9203 0.707107L21.2132 0L10.9609 10.2523L0.708672 0L0.00156516 0.707107L10.2538 10.9594Z"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2538 10.9594L0 21.2132L0.707107 21.9203L10.9609 11.6665L21.2148 21.9203L21.9219 21.2132L11.668 10.9594L21.9203 0.707107L21.2132 0L10.9609 10.2523L0.708672 0L0.00156516 0.707107L10.2538 10.9594Z"></path>
                      </svg>
                    </button>
                  </div>
                  <span className="modal-inputs">
                    <button className="minus-btn">-</button>
                    <input type="text" className="amount-input" value="01" />
                    <button className="plus-btn">+</button>
                    <button className="add-btn">Add to cart</button>
                  </span>
                </div>
          
              </div>
  */

  return (
    <div className="backdrop-2">
        <div className="menu-modal">
          <button className="menu-btn">Menu
            <svg width="22" height="22" viewBox="0 0 22 22" fill="#def2f1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2538 10.9594L0 21.2132L0.707107 21.9203L10.9609 11.6665L21.2148 21.9203L21.9219 21.2132L11.668 10.9594L21.9203 0.707107L21.2132 0L10.9609 10.2523L0.708672 0L0.00156516 0.707107L10.2538 10.9594Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2538 10.9594L0 21.2132L0.707107 21.9203L10.9609 11.6665L21.2148 21.9203L21.9219 21.2132L11.668 10.9594L21.9203 0.707107L21.2132 0L10.9609 10.2523L0.708672 0L0.00156516 0.707107L10.2538 10.9594Z"></path>
            </svg> 
          </button>
          <div className="link-container">
            <p className="menu-link">HOME</p>
            <p className="menu-link">ABOUT US</p>
            <p className="menu-link">CATALOG</p>
            <p className="menu-link">SELLING POINTS</p>
            <p className="menu-link">FAQ</p>
            <p className="menu-link">CONTACTS</p>
          </div>
        </div>
    </div>
  )
}

export default OpenMenu