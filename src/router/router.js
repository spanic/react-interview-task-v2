import { Navigate, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Offers } from "../components/offers/Offers";
import { Graph } from "../components/graph/Graph";

const Routes = Object.freeze({
  Root: "/",
  Offers: "/offers",
  Graph: "/graph",
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
      {
        path: Routes.Graph,
        element: <Graph />,
      },
    ],
  },
]);

export default router;

export { Routes };
