import HomePage from "../components/pages/HomePage";
import Page404 from "../components/pages/404";
import SiginUp from "../components/component/SiginUp/SiginUp";
import CardPage from "../components/component/CardPage/CardPage";
import Deshboard from "../admin/component/Deshboard";
import AddPRoduct from "../admin/component/AddPRoduct";
import DelitProduct from "../admin/component/DelitProduct";
import RanemeProduct from "../admin/component/RanemeProduct";

function ItemRoute(item) {
  window.location.href = "http://localhost:5173/card";
  console.log(item);
}

const RouteSettings = [
  { id: 0, path: "/", exact: true, component: <HomePage event={ItemRoute} /> },
  { id: 1, path: "*", exact: false, component: <Page404 /> },
  {
    id: 2,
    path: "/signin",
    exact: false,
    component: <SiginUp />,
  },
  { id: 3, path: "/card/:id", exact: false, component: <CardPage /> },
  { id: 4, path: "/deshboard", exact: false, component: <Deshboard /> },
  {
    id: 5,
    path: "/deashboard/DelitProduct",
    exact: false,
    component: <DelitProduct />,
  },
  {
    id: 6,
    path: "/deshboard/AddProduct",
    exact: false,
    component: <AddPRoduct />,
  },
  {
    id: 7,
    path: "/deshboard/RenameProduct",
    exact: false,
    component: <RanemeProduct />,
  },
];

export default RouteSettings;
