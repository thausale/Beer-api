import "./App.css";
import BeerNavbar from "./components/BeerNavbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BeerDetail from "./pages/beerDetail";
import Breweries from "./pages/Breweries";

const router = createBrowserRouter([
  {
    path: "/beers",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/breweries",
    element: <Breweries />,
  },
  {
    path: "/beers/:id",
    element: <BeerDetail />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
