import { useEffect, useState } from "react";
import { AllProducts, Product } from "../../../Api/Api";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";

const ProductCards: React.FC<PropsType> = ({ products, category }) => {
   
    const [productsToShow, setProductsToShow] = useState([]) as Array<any> | Array<Product>
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
    <div>
      <div className={styles.all_products_wrapper}>
        {productsToShow.length > 0 && productsToShow.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
type PropsType = {
  products: AllProducts;
  category: string
};
export default ProductCards;
