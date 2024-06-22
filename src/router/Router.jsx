import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import OurTeam from "../page/OurTeam";
import Gallery from "../page/Gallery";
import MatchDetails from "../page/MatchDetails";
import Contact from "../pages/Contact";
import { BiNews } from "react-icons/bi";
import News from "../page/News";
import NewsDetails from "../page/NewsDetails";
import Shop from "../page/Shop";
import Cart from "../page/Cart";
import MyAccount from "../page/MyAccount";
import About from "../pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
       path: "/",
      element: <Home></Home>,
        },
        {
       path: "/ourTeam",
      element: <OurTeam></OurTeam>,
        },
        {
       path: "/gallery",
      element: <Gallery></Gallery>,
        },
        {
       path: "/matchDetail",
      element: <MatchDetails></MatchDetails>,
        },
        {
       path: "/contact",
      element: <Contact></Contact>,
        },
        {
       path: "/news",
      element: <News></News>,
        },
        {
       path: "/newsDetails",
      element: <NewsDetails></NewsDetails>,
        },
        {
       path: "/shop",
      element: <Shop></Shop>,
        },
        {
       path: "/cart",
      element: <Cart></Cart>,
        },
        {
       path: "/myAccount",
      element: <MyAccount></MyAccount>,
        },
        {
       path: "/about",
      element: <About></About>,
        },
      ]
    },
  ]);
export default router;