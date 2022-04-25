import styles from "./Products.module.css";
import { Descriptions, Image, Button } from "antd";
import { CartItem } from "../../../redux/cartReducer";
import Preloader from "../../Preloader/Preloader";

const ProductDescription: React.FC<PropsType> = ({
  product,
  addCartItems,
  cartItems,
  isFetching,
}) => {
  const { price, title, description, category, image, rating, id } = product;
  const { rate } = rating;

  const onAddToCartClick = () => {
    addCartItems(product);
  };
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.description}>
        <div>
          <div className={styles.title}>{title}</div>{" "}
          <div>
            <Image width={"300px"} src={image} />
          </div>
          <div className={styles.add_to_cart_block}>
            <div className={styles.price}>Price: ${price}</div>
            <div className={styles.button_wrapper}>
              <Button
                disabled={cartItems.some((item) => item.id === id)}
                onClick={onAddToCartClick}
              >
                Add to cart
              </Button>
              {isFetching && <Preloader />}
              {cartItems.some((item) => item.id === id) && (
                <span className={styles.added_alert}>Added to cart</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <Descriptions title="Info">
            <Descriptions.Item
              contentStyle={{ fontSize: "15px", marginTop: "3px" }}
              label="Category"
              labelStyle={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {category}
            </Descriptions.Item>
            <Descriptions.Item
              contentStyle={{
                fontSize: "15px",
                width: "400px",
                marginTop: "3px",
              }}
              labelStyle={{ fontSize: "18px", fontWeight: "bold" }}
              label="Description"
            >
              {description}
            </Descriptions.Item>
            <Descriptions.Item
              contentStyle={{ fontSize: "15px", marginTop: "3px" }}
              labelStyle={{ fontSize: "18px", fontWeight: "bold" }}
              label="Rating"
            >
              {rating !== undefined && rate}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

type PropsType = {
  isFetching: boolean;
  product: CartItem;
  addCartItems: (item: CartItem) => void;
  cartItems: Array<CartItem>;
};
