import React, { useContext ,useState} from "react";
// react-router-dom
import { useParams } from "react-router-dom";
// Context
import { CartContext, ProductContext } from "../contexts";
import { useTheme } from "../contexts/ThemeContext";

const ProductDetails = () => {
  //button effect
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  //toggle theme
  const { isdark } = useTheme();

  // get the product id from the url
  const { id } = useParams();

  // Product Context
  const { products } = useContext(ProductContext);
  // Cart Context
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => item.id === +id);
  // // console.log(product);

  // If product is not found
  if (!product) {
    return <section className="h-screen flex justify-center items-center">Loading...</section>;
  }

  // destructure product
  const { title, price, description, images } = product;

  return (
    <div className={`${isdark && "dark"} transition-colors duration-1000`}>
      <section className="pt-32 pb-10 lg:pb-12 lg:py-32 lg:h-screen flex items-center bg-white dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto">
          {/* Image and text wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img className="max-w-[200px] lg:max-w-sm" src={images[0]} alt={title} />
            </div>

            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
              <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
              <p className="mb-8">{description}</p>
              <button className="bg-primary py-4 px-8 text-white" onClick={() => addToCart(product, product.id)}>
                <button onClick={handleClick} className={`${isClicked ? "animate-ping transition duration-500" : ""}`}>Add to Cart</button>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
