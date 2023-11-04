import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    // subscribe theonly needed item from the store
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    useDispatch
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='w-6/12 m-auto'>
            <button className='p-2 m-2 bg-black text-white rounded-lg'
                onClick={handleClearCart}
            >clearCart</button>
            <ItemList items={cartItems}  key='89898989' />
        </div>
    </div>
  )
}
// 
export default Cart;