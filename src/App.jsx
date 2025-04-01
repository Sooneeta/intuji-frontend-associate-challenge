import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";


const HomePage = lazy(() => import("../src/pages/DashboardPage"));

const routes = [
  {
    name: "Dashboard",
    path: "/",
    element: <HomePage />,
  },
];

const renderRoutes = (routes) =>
  routes.map(({ path, element }, index) => (
    <Route
      key={index}
      path={path}
      element={<MainLayout>{element}</MainLayout>}
    />
  ));

const router = createBrowserRouter(
  createRoutesFromElements(<>{renderRoutes(routes)}</>),
  { basename: "/" }
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
