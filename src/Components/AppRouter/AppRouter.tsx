import { Route, Routes} from "react-router-dom"
import CartContainer from "../Content/Cart/CartContainer"
import PaymentProcess from "../Content/Checkout(payment)/PaymentProcess"
import ProductDescriptionContainer from "../Content/ProductsPage/ProductDescriptionContainer"
import ProductsContainer from "../Content/ProductsPage/ProductsContainer"
import Homepage from "../Homepage/Homepage"

const AppRouter: React.FC = () => {
    return (
        <div>
              <Routes>
                    <Route path="/:category" element={<ProductsContainer/>}/>
                    <Route path="/product/:id" element={<ProductDescriptionContainer/>}/>
                    <Route path="/cart" element={<CartContainer/>}/>
                    <Route path="/checkout" element={<PaymentProcess/>}/>
                    <Route path="/online-shop" element={<Homepage/>}/>
              </Routes>
        </div>
    )
}

export default AppRouter