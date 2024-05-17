import './cart.scss'
import images from '../../assets/images'

const Cart = () => {
    return (
        <div className='cartContainer'>
            <div className="cartTop">
                <img src={images.bgImage} alt="blog" />
                <div className="title">
                    <h2>Cart</h2>
                </div>
            </div>
            <div className="cartItem">
                <p>Your cart is empty</p>
            </div>
            <button>Return To shop</button>
        </div>
    )
}

export default Cart