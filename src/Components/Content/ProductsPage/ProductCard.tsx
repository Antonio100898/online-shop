import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { Product } from "../../../Api/Api";
import { CartItem } from "../../../redux/cartReducer";
import styles from "./Products.module.css";

const { Meta } = Card;

const ProductCard: React.FC<PropsType> = ({ product }) => {
  const { id, image, title, price, category } = product;
  return (
    <div>
      <NavLink to={"/product/" + id}>
        <Card
          extra={<div className={styles.price}>${price}</div>}
          size="small"
          hoverable
          style={{ width: 300, margin: 50, height: 600, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 10 }}
          cover={<img alt={title + "_img"} src={image} />}
        >
          <Meta title={title} description={category} />
        </Card>
      </NavLink>
    </div>
  );
};
type PropsType = {
  product: Product;
  cartItems: Array<CartItem>;
};
export default ProductCard;
