import { Layout } from "antd";
import { Provider } from "react-redux";
import { styled } from "styled-components";
import OffersList from "./components/offers-list/OffersList.jsx";
import Total from "./components/total/Total.jsx";
import { store } from "./store/store.js";

const { Footer, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <ContentWrapper>
          <OffersList />
        </ContentWrapper>
        <StickyFooter>
          <Total />
        </StickyFooter>
      </Layout>
    </Provider>
  );
}

const ContentWrapper = styled(Content)`
  padding: 16px;
  min-height: calc(100vh - 86px - 16px);
`;

const StickyFooter = styled(Footer)`
  position: sticky;
  bottom: 0;
  background-color: #003eb3;
`;

export default App;
