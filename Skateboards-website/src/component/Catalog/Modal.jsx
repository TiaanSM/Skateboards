import styles from './Modal.module.css';

const Modal = ({isOpen, onClose, CardDetails}) => {

    // add to cart functionality to be added.
    // display add to cart item in navbar counter.
    // add item img, desc, price, amount and total.
  
    // clean up code refactor and split components.
  
    // imrpove minor details. and add to page when finished.
    // make sure everything responsive and all links, buttons are working.
      
    return isOpen && (
      <div className={styles.backdrop}>
  
                  <div className={styles.modalCard} key={CardDetails.id}>
                    <div className={styles.itemDetails}>
                      <img src={CardDetails.image} alt="" width="98px" height="98px" />
                      <h4 className={styles.boardName}>{CardDetails.design}</h4>
                      <p className={styles.boardSize}>Size: {CardDetails.size}</p>
                      <h6 className={styles.boardPrice}>{CardDetails.price}</h6>
                      <button className={styles.exitModal} onClick={onClose}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2538 10.9594L0 21.2132L0.707107 21.9203L10.9609 11.6665L21.2148 21.9203L21.9219 21.2132L11.668 10.9594L21.9203 0.707107L21.2132 0L10.9609 10.2523L0.708672 0L0.00156516 0.707107L10.2538 10.9594Z"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2538 10.9594L0 21.2132L0.707107 21.9203L10.9609 11.6665L21.2148 21.9203L21.9219 21.2132L11.668 10.9594L21.9203 0.707107L21.2132 0L10.9609 10.2523L0.708672 0L0.00156516 0.707107L10.2538 10.9594Z"></path>
                        </svg>
                      </button>
                    </div>
                    <span className={styles.modalInputs}>
                      <button className={styles.minusButton}>-</button>
                      <input type="text" className={styles.amountInput} value="01" />
                      <button className={styles.plusButton}>+</button>
                      <button className={styles.addToCart}>Add to cart</button>
                    </span>
                  </div>
            
      </div>
    )
}

export default Modal;