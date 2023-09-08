import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

function App() {
  return (
    <Layout>
      <Header />
      <Provider store={store}>
        <Outlet />
      </Provider>
    </Layout>
  );
}

export default App;
