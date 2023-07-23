import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductPage from "./pages/Product/ProductPage";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import useAlan from "../src/Hooks/UserAlan";
import "./app.scss";
import { useEffect } from "react";
const Layout = () => {
  return (
    <div className="app">
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/:id",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
]);
function App() {
  
  useAlan();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
