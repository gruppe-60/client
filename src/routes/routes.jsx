import Home from "../pages/Home";
import BasketsPage from "../pages/Baskets";
import SingleBasket from "../pages/SingleBasket";
import Register from "../pages/Register";


import NotFound from "../pages/NotFound/NotFound";


const routes = [
    { path: "/", element: <Home />, id: 1 },
    { path: "/basket/:id", element:<SingleBasket/> , id: 2 },
    { path: "/basket", element:<BasketsPage/>, id: 3 },
    { path: "/*", element: <NotFound />, id: 4 },
    { path: "/register", element: <Register/>, id: 5 },

  ];
  
  export default routes;