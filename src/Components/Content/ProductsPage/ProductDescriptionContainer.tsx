import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addCartItems, CartItem } from "../../../redux/cartReducer";
import { fetchProduct } from "../../../redux/productsReducer";
import { State } from "../../../redux/Store";
import WithRouterProps from "../../HOC's/WithRouterProps";
import Preloader from "../../Preloader/Preloader";
import ProductDescription from "./ProductDescription";

const ProductDescriptionContainer: React.FC<PropsType> = ({
  product,
  params,
  fetchProduct,
  isFetching,
  addCartItems,
  cartItems,
}) => {
  useEffect(() => {
    fetchProduct(+params.id);
  }, [params.id]);

  if(isFetching || product.rating === undefined) return <Preloader />
  return (
    <div>
      <ProductDescription
        cartItems={cartItems}
        addCartItems={addCartItems}
        product={product}
      />
    </div>
  );
};
const mapStateToProps = (state: State) => ({
  product: state.products.product,
  isFetching: state.products.isFetching,
  cartItems: state.cart.items,
});

type MapStateToProps = {
  product: CartItem;
  isFetching: boolean;
  cartItems: Array<CartItem>;
};
type MapDispatchToProps = {
  fetchProduct: (id: number) => void;
  addCartItems: (item: CartItem) => void;
};

type WithRouter = {
  params: {
    id: string;
  };
};
type PropsType = MapStateToProps & MapDispatchToProps & WithRouter;

export default compose(
  connect(mapStateToProps, { fetchProduct, addCartItems }),
  WithRouterProps
)(ProductDescriptionContainer);
