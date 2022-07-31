import "antd/dist/antd.css";
import { Layout } from "antd";
import AppRouter from "./Components/AppRouter/AppRouter";
import store from "./redux/Store";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import MainMenu from "./Components/Menu/MainMenu";
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider style={{ paddingTop: "100px" }}>
          <MainMenu />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              textAlign: "center",
              color: "#ffff",
              fontSize: "40px",
            }}
          >
            <NavLink style={{ color: "#ffff" }} to="/online-shop">
              ONLINE SHOP
            </NavLink>
          </Header>
          <Content style={{ padding: 24, minHeight: 800}}>
              <AppRouter />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Anton's online shop project.
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

const AppRouterContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default AppRouterContainer;
