// import Counter from "./../components/Counter";
import { Button } from "@mantine/core";
import "../styles/home.css";
import { useSelector } from "react-redux";
import ProductsCards from "../components/cardsGroups/ProductsCards";
const Home = () => {
  const login = useSelector((state) => state.login.login);
  return (
    <div>
      {/* <Counter /> */}
      {login ? (
        <ProductsCards />
      ) : (
        <section className="landing-section">
          <div className="content">
            <h1 className="h-landing">City Best Fashion Store</h1>
            <p className="p-landing">
              Discover the epitome of mens style at our store, where fashion
              meets sophistication, and quality is our signature.
            </p>
            <Button variant="filled" radius="lg" className="cta-button">
              Shop now
            </Button>
          </div>
        </section>
      )}
      {/* this is some edited code */}
    </div>
  );
};

export default Home;
