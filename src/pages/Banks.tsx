import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BankList } from "@lib/bankList";
import { Divider, Input } from "antd";
import { AnimatePresence, motion } from "framer-motion";

//components
import BankModal from "@comp/BankModal";
import CondueetLogo from "@comp/condueet-logo/CondueetLogo";

import search from "@assets/search.svg";
import SlideTransition from "@comp/animations/SlideTransition";
// import "./Banks.css";

export default function Banks() {
  // this referred to the modalComponent refObject
  // used to open modal from parent element
  const modalRef = React.useRef<{ openModal(id: string): void }>(null);

  //search states(stores the value of the input text)
  const [searchedBanks, setSearchedBank] = React.useState("");

  // React.useEffect(() => {
  //   if (!location.state) {
  //     navigate("/");
  //   }
  // }, [location.state, navigate]);

  //search function, maps through the banks name and returns the arrays that match the input search
  const filteredbanks = BankList.filter((bank) => {
    return bank.name.toLowerCase().includes(searchedBanks);
  });

  return (
    <SlideTransition unMount={false} noPadding>
      <section className="banks h-full overflow-auto">
        <div className="header p-5 flex justify-center gap-x-16 sticky top-0 z-50 bg-[#f3f5fc]">
          {/* <GoBack setUnMount={setUnMount} /> */}
          <CondueetLogo />
        </div>
        <div className="banks-wrap px-5 pb-5">
          <div className="banks-container my-3">
            <div className="input_container">
              <Input
                type="search"
                className="rounded-3xl shadow-lg"
                onChange={(e) => setSearchedBank(e.target.value.toLowerCase())}
                placeholder="Search for your bank"
              />
              {/* <img src={search} alt="search" /> */}
            </div>
            <div className="filter-banks my-4">
              <h1 className="text-sm font-semibold mb- 3">Choose your bank</h1>
              <div className="banks-list_wrap bg-white p-3 mt-4 rounded-xl shadow-lg flex flex-col gap-y-2">
                {filteredbanks.map((bank, index) => (
                  <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    key={Math.random()}
                    onClick={() => modalRef.current?.openModal(bank.id)}
                    className="bank list_item cursor-pointer"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scaleZ: 1.1 }}
                  >
                    <div className="list-item-content p-2 items-center rounded-lg hover:shadow-lg hover:bg-sky transition-all flex gap-x-3">
                      <img
                        src={bank.logo}
                        alt="logo"
                        className="rounded-full"
                      />
                      <p className="font-semibold text-sm">{bank.name}</p>
                    </div>
                    <Divider className="my-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* modal component takes the handleclose function and id(index) of the object in the array as a prop */}
      </section>
      <BankModal ref={modalRef} />
    </SlideTransition>
  );
}
