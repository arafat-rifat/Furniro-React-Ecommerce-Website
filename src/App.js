import RootLayout from "./Components/RootLayout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/ProductDetails",
        element: <ProductDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
