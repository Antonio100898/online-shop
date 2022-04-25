import { ShoppingCartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { CartItem } from "../../../redux/cartReducer";
import styles from "./Cart.module.css";
import CartProduct from "./CartProduct";

const Cart: React.FC<PropsType> = ({ items, removeCartItem, total }) => {
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart}>
        <div className={styles.cart_items}>
          <div className={styles.cart_header}>
            {" "}
            <ShoppingCartOutlined /> My cart
          </div>
          {items.map((item) => (
            <CartProduct
              removeCartItem={removeCartItem}
              key={item.id}
              item={item}
            />
          ))}
        </div>
        <div className={styles.cart_total}>
          <div className={styles.cart_header}>Total</div>
          <div className={styles.total + " " + styles.price}>{total} $</div>
          <div>
            <NavLink to={"/checkout"}>
              <u>Proceed to checkout</u>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

type PropsType = {
  items: Array<CartItem>;
  removeCartItem: (id: number) => void;
  total: number;
};

export default Cart;
