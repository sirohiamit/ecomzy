import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import axios from '../utils/api';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/slices/LoaderSlice';

function ProductPage() {
  const [apiResponse, setApiRespone] = useState([]);
  const dispatch = useDispatch();
  const response = async () => {
    dispatch(setLoading(true));
    try {
      const data = await axios.get();
      if (data) {
        setApiRespone(data)
        dispatch(setLoading(false))
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log(error)
    }
  }

  useEffect(() => {
    response();
  }, [])

  return (
    <div className='product-wrapper w-75 m-auto'>
      {apiResponse.map((res) => {
        return <Card res={res} key={res.id} />
      })}
    </div>
  )
}

export default ProductPage