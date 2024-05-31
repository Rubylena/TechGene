import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import AllProducts from "../components/Products/AllProducts";

const Home = () => {
  return (
    <div className="overflow-hidden font-serif ">
      <Nav />
      <Banner />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default Home;
