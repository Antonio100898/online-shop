import { CloseCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { CartItem } from "../../../redux/cartReducer";
import styles from "./Cart.module.css";

const CartProduct: React.FC<PropsType> = ({ item, removeCartItem }) => {
  const { title, image, price, id } = item;

  const onRemoveFromCartClick = () => {
    removeCartItem(id);
  };

  return (
    <div className={styles.cart_item}>
      <div>
        <img className={styles.cart_img} src={image} alt={title + "_picture"} />
      </div>
      <div className={styles.cart_description}>
        <div className={styles.price}>{price} $</div>
        <div><NavLink to={"/product/" + id}>{title}</NavLink></div>
      </div>
      <div className={styles.delete_button}>
        <CloseCircleOutlined onClick={onRemoveFromCartClick} style={{fontSize: "30px"}}/>
      </div>
    </div>
  );
};
type PropsType = {
  item: CartItem;
  removeCartItem: (id: number) => void;
};
export default CartProduct;
