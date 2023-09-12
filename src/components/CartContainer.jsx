import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const CartContainer = () => {
    return (
    <div className="bg-warning rounded-circle p-3 position-relative">
        <CartIcon color="black"/>
        <CartItems count={5} />
    </div>
    )
}

export default CartContainer;