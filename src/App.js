import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { Layout } from "antd";
import { styled } from "styled-components";
import BoltOnsList from "./components/bolt-ons-list/BoltOnsList.jsx";
import Total from "./components/total/Total.jsx";

const { Footer, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <ContentWrapper>
          <BoltOnsList />
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
