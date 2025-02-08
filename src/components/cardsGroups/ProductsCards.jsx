import { Button } from "@mantine/core";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { products } from "./../../fakedata/products";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/favouriteSlice";
import "../../styles/cardsStyles/productsCards.css";
const ProductsCards = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite.favourites);

  // Function to toggle favorite status for a product
  const toggleFavourite = (product) => {
    const isFavourite = favourites.some((fav) => fav.id === product.id);
    if (isFavourite) {
      dispatch(remove(product.id)); // Remove product from favourites
    } else {
      dispatch(add(product)); // Add product to favourites
    }
  };

  return (
    <div className="products-container" style={{ marginTop: "50px" }}>
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <div className="image-section">
            {/* Favorite Heart Icon */}
            <div onClick={() => toggleFavourite(p)} className="heart-icon">
              {favourites.some((fav) => fav.id === p.id) ? (
                <FaHeart color="#e20319" className="love" />
              ) : (
                <FaRegHeart className="love" />
              )}
            </div>
            <img
              src={p.image}
              alt={p.title}
              className="product-image"
              height={"180px"}
            />
          </div>
          <div className="product-details">
            <div className="product-details-heading">
              <h1 className="product-title">{p.title}</h1>
              <div className="rating-section">
                <CiStar className="star-icon" />
                <span className="span-rate">{p.rating}</span>
              </div>
            </div>
            <div className="colors">
              {p.colors?.map((color, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    backgroundColor: color,
                    borderRadius: "50%",
                    margin: "0 -3px",
                    border: color == "white" ? "1px solid #a5a5a5" : "none",
                  }}
                  className="color-circle"
                />
              ))}
            </div>
            <p className="desc">{p.description}</p>
            <div className="price-cart">
              <p className="price">${p.price}</p>
              <Button className="cart-btn">Cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
