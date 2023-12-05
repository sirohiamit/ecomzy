import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

function Card({ res }) {
    const dispatch = useDispatch();
    const cart_values = useSelector((state) => state.cart);
    function handleAddToCart() {
        dispatch(add(res));
        toast.success('Added to cart')
    }

    function handleRemoveFromCart() {
        dispatch(remove(res.id));
        toast.success('Removed from cart')
    }

    return (
        <div className="card-wrapper">
            <div className="card-title">{`${res.title.substring(0, 25)}...`}</div>
            <div className="card-description">{`${res.description.substring(0, 50)}...`}</div>
            <div className="card-img">
                <img src={res.image} alt="img" width={150} height={150} loading="lazy"></img>
            </div>
            <div className="card-bottom">
                <div className="price">{`$${res.price}`}</div>
                {cart_values.find((value) => value.id === res.id) ? (
                    <button className="btn" onClick={handleRemoveFromCart}>
                        Remove from Cart
                    </button>
                ) : (
                    <button className="btn" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    )};

export default Card;
