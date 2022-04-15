import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import styles from "./App.module.css";
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
        <Sider>
          <img
            className={styles.logo}
            src="https://img.freepik.com/free-vector/online-shop-logo-design-template_145155-927.jpg"
            alt="shop_logo"
          />  
          <MainMenu/>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 800 }}
            >
              <AppRouter/>
            </div>
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
    <App/>
    </Provider>
    </BrowserRouter>
  )
}

export default AppRouterContainer;
