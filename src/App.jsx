import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mail from "./components/Mail";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import SendMail from "./components/SendMail";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);
const App = () => {
  const user = false;
  return (
    <div className=" bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="absolute w-[30%] bottom-0 right-20 z-10">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
