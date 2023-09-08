import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Offers from "../components/offers/Offers";

const Routes = Object.freeze({
  Root: "/",
  Offers: "/offers",
});

const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to={Routes.Offers} replace />,
      },
      {
        path: Routes.Offers,
        element: <Offers />,
      },
    ],
  },
]);

export default router;

export { Routes };
