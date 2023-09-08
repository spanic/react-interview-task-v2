import { Layout, Menu } from "antd";
import { Link, useResolvedPath } from "react-router-dom";
import { Routes } from "../../router/router";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const { pathname } = useResolvedPath();
  return (
    <AntdHeader>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[pathname]}
        items={[
          { key: Routes.Offers, label: <Link to={Routes.Offers}>Offers</Link> },
        ]}
      />
    </AntdHeader>
  );
};
