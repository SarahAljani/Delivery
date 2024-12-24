import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterLogin from "../pages/RegisterLogin";
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={
          {
            //   width: "100%",
            //   display: "flex",
            //   flexDirection: "column",
            //   minHeight: " 100vh",
            //   flexWrap: "wrap",
            //   position: "relative",
          }
        }
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      { path:"/login", element: <RegisterLogin /> },
    ],
  },
]);

export default Router;
