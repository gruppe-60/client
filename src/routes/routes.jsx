import Home from "../pages/Home/Home";
import BasketsPage from "../pages/Baskets/Baskets";
import SingleBasket from "../pages/SingleBasket/SingleBasket";


import NotFound from "../pages/NotFound/NotFound";


const routes = [
    { path: "/", element: <Home />, id: 1 },
    { path: "/basket/:id", element:<SingleBasket/> , id: 2 },
    { path: "/baskets", element:<BasketsPage/>, id: 3 },
    { path: "/*", element: <NotFound />, id: 4 },
  ];
  
  export default routes;