import React from "react";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { Cart } from ".";
import { useStateContext } from "../context/StateContext";
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const { user } = useUser();
  const {
    showCart,
    setShowCart,
    setSearchInput,
    toggleAdvSearch,
    setToggleAdvSearch,
    totalQuantities,
    setAdvSearchName,
    setAdvSearchBrand,
    setAdvSearchMaxPrice,
    setAdvSearchMinPrice,
  } = useStateContext();

  const userInfo = () => {
    if (user) {
      return (
        < >
          {/* <h4>Hello, {user.given_name}!</h4> */}
          <a className="logout-button">
            {user.given_name ? `Hello, ${user.given_name}!` : "Hello There!"}
          </a>
          <a className="advance-search" href="/api/auth/logout">Logout?</a>
        </>
      );
    }
    return (
      <p className="advance-search">
        <a href="/api/auth/login">Login</a>
      </p>
    );
  };

  return (
    <div className="navbar-container">
      <p className="">
        <button
          className="logo"
          onClick={() => {
            setToggleAdvSearch(false),
              setAdvSearchName(""),
              setAdvSearchBrand(""),
              setAdvSearchMaxPrice(1000000),
              setAdvSearchMinPrice(0);
          }}
        >
          <Link href={"/"}>CellMate</Link>
        </button>
      </p>

      {/* <label className='search-box'>
          <AiOutlineSearch />
          <input placeholder='Quick Search' type="text" name="name" onChange={(e)=> setSearchInput(e.target.value)} />
        </label> */}
      {toggleAdvSearch && (
        <button
          className="advance-search"
          onClick={() => {
            setToggleAdvSearch(true),
              setAdvSearchName(""),
              setAdvSearchBrand(""),
              setAdvSearchMaxPrice(1000000),
              setAdvSearchMinPrice(0);
          }}
        >
          <Link href={"/"}>Search</Link>
        </button>
      )}

      {!toggleAdvSearch && (
        <button
          className="advance-search"
          onClick={() => setToggleAdvSearch(true)}
        >
          <Link href={"/"}>Search</Link>
        </button>
      )}
      {userInfo()}
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
