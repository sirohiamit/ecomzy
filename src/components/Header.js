import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const cart_value = useSelector((state)=> state.cart.length);
  const navigate = useNavigate();
  return (
    <div className="header-wrapper d-flex justify-content-between">
      <div className="logo d-flex align-items-center"  onClick={()=> navigate('/')}>
        <div>
          <HiShoppingBag size={35} color="white" />
        </div>
        <div className="brand_name">Ecomzy</div>
      </div>

      <div className="cart-icon d-flex align-items-center">
        <Link to="/cart">
          <IoCartOutline className="icon" size={35} color="white" />
          <div className="cart_value">{cart_value}</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
