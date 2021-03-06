import React, { useState } from 'react';
import { useCart } from 'context/cart-context';
import { Loader } from 'components';
import { useAddToCart } from 'custom-hooks/useAddToCart';
import { useNavigate } from 'react-router-dom';

function ProductItem({ item, children }) {
  let navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [loader, setLoader] = useState(false);
  const {
    _id,
    image,
    productName,
    name,
    price,
    inStock,
    fastDelivery,
    rating,
    seller,
    newRelease,
  } = item;

  const addCartItem = () => useAddToCart(item, dispatch, setLoader);
  const navigateProductDetail = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <article className="card-container m-4 ecom__card-container">
      <figure onClick={navigateProductDetail} className="card-image-container">
        <img
          loading="lazy"
          src={image}
          width="100%"
          height="auto"
          alt={productName}
          className="card-image"
        />
      </figure>
      <main onClick={navigateProductDetail} className="card-body l-h-1">
        <h3 className="f-7 l-h-4">{name}</h3>
        <p className="l-h-3">
          <span className="price f-7">Rs. {parseInt(price)}</span>
          <span className="line-through m-h-1">
            Rs. {parseInt(price) + 200}
          </span>
          <span className="t-c-3 f-bold m-h-1">(30% OFF)</span>
        </p>
        {inStock && <p className="f-7 t-c-4"> In Stock </p>}
        {!inStock && (
          <div className="card-text-overlay position z-index-md">
            <span className="f-8 t-c-1">Out of stock</span>
          </div>
        )}

        {fastDelivery ? (
          <p className="f-7 t-c-2 f-bold"> Fast Delivery </p>
        ) : (
          <p className="f-7 t-c-2 f-bold"> 3 days minimum </p>
        )}

        <div className="read-only-wrapper top-center flex">
          <span className="f-8 p-h-2">{rating}</span>
          <div className="read-only-rating p-4"></div>
          <span className="f-8 p-h-2">Rating</span>
          <span className="f-bold t-c-3">Sold By : ({seller})</span>
        </div>
      </main>
      <div className="call-to-action">
        {state.cart.find(item => item._id === _id) ? (
          <button
            onClick={() => navigate('/cart')}
            className="btn outline-danger m-h-3 t-c-2 w-100"
          >
            Go to cart
          </button>
        ) : (
          <button
            onClick={addCartItem}
            className="btn btn-danger m-h-3 t-c-1 w-100"
          >
            {loader ? <Loader /> : 'Add To Cart'}
          </button>
        )}
      </div>
      {newRelease && (
        <span className="card-badge special-badge f-5 p-3 t-c-1">
          New Release
        </span>
      )}
      <span
        className={`card-badge card-dismiss-icon ${
          newRelease && 'card-heart-icon'
        }`}
      >
        {children}
      </span>
    </article>
  );
}

export { ProductItem };
