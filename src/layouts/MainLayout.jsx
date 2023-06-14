import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

// assets
import "../assets/styles/layouts/main-layout.scss";

const NAVIGATION_ITEMS = [
  {
    label: <Link to="/">Home</Link>,
    key: "mail",
  },
  {
    label:  <Link to="/about-us">About Us</Link>,
    key: "app",
  },
];

function MainLayout({ children }) {

  return (
    <Layout className="lsn-main-layout">
      <Layout.Header>
        <Menu items={NAVIGATION_ITEMS} mode="horizontal"/>
      </Layout.Header>
      <Layout.Content className="lsn-main-layout__page-content">{ children }</Layout.Content>
      <Layout.Footer className="lsn-main-layout__page-footer">Footer</Layout.Footer>
    </Layout>
  );
}

export default MainLayout;
