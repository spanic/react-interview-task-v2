import { Layout, Menu } from "antd";
import { Link, useResolvedPath } from "react-router-dom";
import { Routes } from "../../router/router";
import { styled } from "styled-components";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  const { pathname } = useResolvedPath();
  return (
    <StickyHeader>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[pathname]}
        items={[
          { key: Routes.Offers, label: <Link to={Routes.Offers}>Offers</Link> },
          { key: Routes.Graph, label: <Link to={Routes.Graph}>Graph</Link> },
        ]}
      />
    </StickyHeader>
  );
};

const StickyHeader = styled(AntdHeader)`
  position: sticky;
  top: 0;
  z-index: 1;
`;
