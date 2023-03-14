import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


const routes = [
    { path: "/", element: <Home />, id: 1 },
    // { path: "/add-item", element: , id: 2 },
    // { path: "/basket", element: , id: 3 },
    { path: "/*", element: <NotFound />, id: 4 },
  ];
  
  export default routes;