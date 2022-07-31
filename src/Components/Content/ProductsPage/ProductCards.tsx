import { useEffect, useState } from "react";
import { AllProducts, Product } from "../../../Api/Api";
import { CartItem } from "../../../redux/cartReducer";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";

const ProductCards: React.FC<PropsType> = ({
  products,
  category,
  cartItems,
}) => {
  const [productsToShow, setProductsToShow] = useState([]) as
    | Array<any>
    | Array<Product>;

  const categoryHandler = () => {
    switch (category) {
      case "men":
        setProductsToShow(
          products.filter((product) => product.category === "men's clothing")
        );
        break;
      case "jewelery":
        setProductsToShow(
          products.filter((product) => product.category === "jewelery")
        );
        break;
      case "electronics":
        setProductsToShow(
          products.filter((product) => product.category === "electronics")
        );
        break;
      case "women":
        setProductsToShow(
          products.filter((product) => product.category === "women's clothing")
        );
        break;
      case "allProducts":
        setProductsToShow(products);
    }
  };
  useEffect(() => {
    categoryHandler();
  }, [category]);

  return (
    <div className={styles.all_products_wrapper}>
      {productsToShow.length > 0 &&
        productsToShow.map((product: Product) => (
          <ProductCard
            cartItems={cartItems}
            key={product.id}
            product={product}
          />
        ))}
    </div>
  );
};
type PropsType = {
  products: AllProducts;
  category: string;
  cartItems: Array<CartItem>;
};
export default ProductCards;
