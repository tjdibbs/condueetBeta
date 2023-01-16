import React, { ReactElement } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Banks from "@pages/Banks";
import Consent from "@pages/Consent";
import BankForm from "@pages/bankform/Bankform";

function App() {
  const location = useLocation();
  const element = useRoutes([
    {
      path: "/",
      element: <Consent />,
    },
    {
      path: "/banks",
      element: <Banks />,
    },
    {
      path: "/banks/:id",
      element: <BankForm />,
    },
  ]);

  return (
    <div className="app-container bg-cover-image w-screen h-screen grid place-items-center">
      <div className="app-wrapper relative h-[80%] bg-[#f3f5fc] shadow-lg rounded-xl  w-[400px] mx-auto overflow-x-hidden overflow-y-auto">
        <AnimatePresence>
          {React.cloneElement(element as ReactElement, {
            key: location.pathname,
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
