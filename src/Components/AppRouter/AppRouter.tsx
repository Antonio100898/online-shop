import { Route, Routes} from "react-router-dom"
import LoginContainer from "../Content/LoginPage/LoginContainer"
import ProductsContainer from "../Content/ProductsPage/ProductsContainer"

const AppRouter: React.FC = () => {
    return (
        <div>
              <Routes>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/:category" element={<ProductsContainer/>}/>
              </Routes>
        </div>
    )
}

export default AppRouter