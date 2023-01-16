import { Link, useLocation } from "react-router-dom";

//icons
import close from "@assets/close.svg";
import internet from "@assets/internet.svg";

//bank list
import { BankList } from "@lib/bankList";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default React.forwardRef<{
  /** identified a particular bank */
  openModal(id: string): void;
}>((props, ref) => {
  const [state, setState] = React.useState({ id: "", open: false });

  // get bank by id passed to the openModal
  const bank = BankList.find((bank) => bank.id === state.id);

  React.useImperativeHandle(ref, () => ({
    openModal: (id) => setState({ open: true, id }),
  }));

  const location = useLocation();

  return (
    <AnimatePresence>
      {state.open && (
        <motion.div className="bank-modal absolute overflow-hidden grid place-items-center h-full w-full z-[1000] top-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full absolute w-full top-0 left-0 bg-black/40"
          />
          <motion.div
            initial={{ scale: 0.4, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 100, opacity: 0 }}
            className="bank-modal-wrap w-[300px] rounded-xl p-8 shadow-xl relative z-10 bg-white"
          >
            <div className="modal-header flex items-center justify-between mb-4">
              <p className="bank-modal-title font-bold">
                Choose a login method
              </p>
              <div className="close-btn cursor-pointer">
                <img
                  src={close}
                  alt=""
                  onClick={() => setState({ id: "", open: false })}
                  className="h-5 w-5"
                />
              </div>
            </div>
            <div className="bank-modal-login-method">
              <Link
                to={`/banks/${state.id}`}
                className="login-method-internet shadow-lg items-center p-3 my-3 ring-1 ring-deep-blue/50 rounded-2xl flex gap-x-4"
                state={location.state}
              >
                <img src={internet} alt="close button" />
                <div className="internet-text">
                  <p className="text-sm">Login with internet banking</p>
                </div>
              </Link>
              <p className="internet-text_two text-sm">
                Click above to use the credentials you use with your{" "}
                <b className="text-main-blue font-bold">{bank!.name}</b>{" "}
                internet banking
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

//to={`/banks/${index}`}
