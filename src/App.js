import { Layout } from "antd";
import { Provider } from "react-redux";
import { styled } from "styled-components";
import OffersList from "./components/offers-list/OffersList.jsx";
import { store } from "./store/store.js";
import TotalWrapper from "./components/total-wrapper/TotalWrapper.jsx";

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <ContentWrapper>
          <OffersList />
        </ContentWrapper>
        <StickyTotalFooter />
      </Layout>
    </Provider>
  );
}

const ContentWrapper = styled(Content)`
  padding: 16px;
  min-height: calc(100vh - 86px - 16px);
`;

const StickyTotalFooter = styled(TotalWrapper)`
  &.ant-layout-footer {
    position: sticky;
    bottom: 0;
  }
`;

export default App;
