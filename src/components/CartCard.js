import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function CartCard(props) {
    const value = props.value;
    const dispatch = useDispatch();
    
    function handleDelete(){
        dispatch(remove(value.id))
        toast.success('Item Removed')
    }

  return (
    <div className='cart-card-wrapper'>
        <div className='image-section'><img src={value.image} alt='img' width={120}></img></div>
        <div className='description-section'>
            <div className='card-title'>{value.title}</div>
            <div className='card-description'>{`${value.description.substring(0, 80)}...`}</div>
            <div className='card-price-section'>
                <div className='price'>{`$${value.price}`}</div>
                <div className='delete' onClick={handleDelete}><MdDelete size={20} /></div>
            </div>
        </div>
    </div>
  )
}

export default CartCard