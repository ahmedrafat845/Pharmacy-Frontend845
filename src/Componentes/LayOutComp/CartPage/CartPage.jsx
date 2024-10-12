import { useContext } from "react";
import { Container } from "react-bootstrap";
import { FetchCartContext } from "../../../Context/Cart";

const CartPage = () => {
    const { cart, numOfCart, deleteProductCart ,AddProductToCart,UpdateProductCart,clearCart} = useContext(FetchCartContext);
    console.log(cart.items);
    

    const cartItems = cart?.items || [];

    return (
        <Container>
            <h4>My Cart</h4>
            <p>Number of Items in Cart: {numOfCart}</p>
            <div>
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index}>
                            <p>{item.productName}</p>
                            <p>Quantity: {item.quantity}</p>
                            
                            <button onClick={() => deleteProductCart(item.productId)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </Container>
    );
};

export default CartPage;
