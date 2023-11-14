import { useDispatch } from "react-redux";
import { productDetails } from "../database/data";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../features/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const add = (index) => {
    dispatch(addProduct(productDetails[index]));
    redirect("/cart");
  };

  return (
    <div>
      <div className="home-container">
        {productDetails.map((item, index) => {
          return (
            <div className="cart" key={item.id}>
              <div className="image">
                <img src={item.image} />
              </div>
              <p className="name">{item.name}</p>
              <p className="price">₹ {item.price}</p>
              <button className="btn" onClick={() => add(index)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
