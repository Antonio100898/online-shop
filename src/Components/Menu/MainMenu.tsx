import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

const MainMenu: React.FC = () => {
  return (
    <Menu theme="dark" mode="inline" style={{ width: 200 }}>
      <SubMenu key="sub1" title="Shop">
        <Menu.Item key="1"><NavLink to='/allProducts'>All products</NavLink></Menu.Item>
        <SubMenu  key="sub2" title="Categories">
        <Menu.Item key="2"><NavLink to='/men'>Men's clothing</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to='/women'>Women's clothing</NavLink></Menu.Item>
        <Menu.Item key="4"><NavLink to='/jewelery'>Jewelry</NavLink></Menu.Item>
        <Menu.Item key="5"><NavLink to='/electronics'>Electonic</NavLink></Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key="6">Cart</Menu.Item>
      <Menu.Item key="7">Login</Menu.Item>
    </Menu>
  );
};
export default MainMenu;
