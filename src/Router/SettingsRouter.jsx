import HomePage from "../components/pages/HomePage";
import Page404 from "../components/pages/404";
import SiginUp from "../components/component/SiginUp/SiginUp";
import { Modal } from "flowbite-react";

const RouteSettings = [
  { id: 0, path: "/", exact: true, component: <HomePage /> },
  { id: 1, path: "*", exact: false, component: <Page404 /> },
  { id: 2, path: "/signin", exact: false, component: <SiginUp /> },
];

export default RouteSettings;
