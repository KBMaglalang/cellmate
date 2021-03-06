import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { Product, Rating } from "../../components.js";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";

const ProductDetails = ({ product, products }) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const { image, name, description, price, stock, avgrating, reviews } = product;
  const [counter, setCounter] = useState(reviews);
  const [rating, setRating] = useState(avgrating);
  const {
    incQty,
    decQty,
    qty,
    onAdd,
    setShowCart,
    hoverRating,
    setHoverRating,
  } = useStateContext();

  // force update with the server side render
  useEffect(() => {
    router.replace(router.asPath);
    setIndex(0);
  }, []);

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };
  const onMouseEnter = (ind) => {
    router.replace(router.asPath);
    setHoverRating(ind);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (ind) => {
    setRating(ind);
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          <div>
            <img
              src={image[index] && urlFor(image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={item && urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={(e) => setIndex(i)}
                height={200}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews"> <p>{avgrating}</p>
            {[1, 2, 3, 4, 5].map((ind, i) => {
              return (
                <Rating
                  key={i}
                  ind={ind}
                  rating={rating}
                  hoverRating={hoverRating}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onSaveRating={onSaveRating}
                />
              );
            })}
            <p>{counter}</p>
          </div>
          <h4>Details</h4>
          <p>{description}</p>
          <p className="price"> ${price} </p>
          {stock > 10 && <h4>{stock} in Stock</h4>}
          {stock <= 10 && stock > 0 && <h4>Only {stock} Left in Stock!!!</h4>}
          {stock === 0 && <h4>Out of Stock</h4>}
          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={() => incQty(product)}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              className={stock === 0 ? "add-to-cart no-stock" : "add-to-cart"}
              type="button"
              disabled={stock === 0}
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              className={stock === 0 ? "buy-now no-stock" : "buy-now"}
              type="button"
              disabled={stock === 0}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }
//   `;
//   const products = await client.fetch(query);
//   const paths = products.map((product) => ({
//     params: {
//       slug: product.slug.current,
//     },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async ({ params: { slug } }) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]';

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   return {
//     props: { products, product },
//   };
// };

export const getServerSideProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: { products, product },
  };
};

export default ProductDetails;
