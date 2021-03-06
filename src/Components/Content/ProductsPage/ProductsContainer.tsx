import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AllProducts } from "../../../Api/Api";
import { CartItem } from "../../../redux/cartReducer";
import { fetchAllProducts, setCategory } from "../../../redux/productsReducer";
import { State } from "../../../redux/Store";
import WithRouterProps from "../../HOC's/WithRouterProps";
import Preloader from "../../Preloader/Preloader";
import ProductCards from "./ProductCards";

const ProductsMain: React.FC<PropsType> = ({
  fetchAllProducts,
  products,
  isFetching,
  params,
  category,
  setCategory,
  cartItems,
}) => {
  useEffect(() => {
    fetchAllProducts();
    setCategory(params.category);
  }, []);

  useEffect(() => {
    setCategory(params.category);
  }, [params]);
  
  if (isFetching) return <Preloader />;
  return (
    <div>
      <ProductCards
        cartItems={cartItems}
        category={category}
        products={products}
      />
    </div>
  );
};
type WithRouter = {
  params: {
    category: string;
  };
};
type MapDispatchToProps = {
  fetchAllProducts: () => void;
  setCategory: (category: string) => void;
};

type MapStateToProps = {
  products: AllProducts;
  isFetching: boolean;
  category: string;
  cartItems: Array<CartItem>;
};
const MapStateToProps = (state: State) => ({
  products: state.products.allProducts,
  isFetching: state.products.isFetching,
  category: state.products.category,
  cartItems: state.cart.items,
});

export default compose(
  connect<MapStateToProps, MapDispatchToProps, unknown, State>(
    MapStateToProps,
    { fetchAllProducts, setCategory }
  ),
  WithRouterProps
)(ProductsMain);

type PropsType = MapStateToProps & MapDispatchToProps & WithRouter;
