import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  CartItem,
  fetchCartItems,
  removeCartItem,
  setTotal,
} from "../../../redux/cartReducer";
import { State } from "../../../redux/Store";
import Cart from "./Cart";
import { Empty } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./Cart.module.css";

const CartContainer: React.FC<PropsType> = ({
  fetchCartItems,
  items,
  removeCartItem,
  total,
  setTotal,
}) => {

  useEffect(() => {
    fetchCartItems();
    setTotal();
  }, []);

  useEffect(() => {
    setTotal();
  }, [items]);

  return items.length === 0 ? (
    <div>
      <Empty
        style={{ fontSize: "30px" }}
        description={"Your cart is empty"}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
      <div className={styles.link}>
        <NavLink to={"/allProducts"}>shop now</NavLink>
      </div>
    </div>
  ) : (
    <Cart total={total} removeCartItem={removeCartItem} items={items} />
  );
};

const mapStateToProps = (state: State) => ({
  items: state.cart.items,
  total: state.cart.total,
});
type PropsType = {
  fetchCartItems: () => void;
  removeCartItem: (id: number) => void;
  setTotal: () => void;
  items: Array<CartItem>;
  total: number;
};
export default connect(mapStateToProps, {
  fetchCartItems,
  removeCartItem,
  setTotal,
})(CartContainer);
