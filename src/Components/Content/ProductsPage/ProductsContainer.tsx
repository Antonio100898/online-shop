import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AllProducts, Product } from "../../../Api/Api";
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
  setCategory
}) => {
  
  useEffect(() => {
    fetchAllProducts();
    setCategory(params.category)
  }, []);
  
  useEffect(() => {
    setCategory(params.category);
  }, [params])
  return (
    <div>
      {isFetching ? <Preloader /> : <ProductCards category={category} products={products} />}
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
};
const MapStateToProps = (state: State) => ({
  products: state.products.allProducts,
  isFetching: state.products.isFetching,
  category: state.products.category,
});

export default compose(
  connect<MapStateToProps, MapDispatchToProps, unknown, State>(
    MapStateToProps,
    { fetchAllProducts, setCategory }
  ),
  WithRouterProps
)(ProductsMain);

type PropsType = MapStateToProps & MapDispatchToProps & WithRouter;
