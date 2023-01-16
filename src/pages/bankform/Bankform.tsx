import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

//styles
// import "./BankForm.css";

//bank list
import { BankList } from "@lib/bankList";
import SlideTransition from "@comp/animations/SlideTransition";
import { Button, ConfigProvider, Input } from "antd";
import GoBack from "@comp/GoBack";

//components

export default function BankForm() {
  const [unMount, setUnMount] = React.useState(false);
  const { id } = useParams();

  //react dom states
  const location = useLocation();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (!location.state) {
  //     navigate("/");
  //   }
  // }, [location.state, navigate]);

  // get bank by id passed to the params
  const bank = BankList.find((bank) => bank.id === id);

  return (
    <SlideTransition unMount={unMount} noPadding>
      <section className="bank-form p-5 h-full">
        <div className="absolute top-3 left-4">
          <GoBack setUnMount={setUnMount} />
        </div>
        <div className="bank-form-wrap h-full grid place-items-center">
          <div className="bank-form-logo">
            <img
              src={bank?.xlogo}
              className={` border-2 rounded-full`}
              style={{
                borderColor: bank?.sColor,
              }}
              alt=""
            />
          </div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: bank?.sColor,
              },
            }}
          >
            <form className="bank-form flex px-4 flex-col gap-y-4 w-full">
              <div className="info text-center font-semibold text-sm text-gray-800">
                Enter your Credentials for{" "}
                <b style={{ color: bank?.sColor }}>{bank?.name}</b>
              </div>
              <Input
                // size="large"
                type="text"
                className="shadow-lg rounded-3xl bg-transparent"
                placeholder="Username"
                required
              />
              <Input
                // size="large"
                type="password"
                className="shadow-lg rounded-3xl bg-transparent"
                placeholder="Password"
                required
              />
              <Button
                size="large"
                style={{ backgroundColor: bank?.sColor }}
                className={` mt-4 rounded-3xl text-white shadow-lg`}
              >
                Login
              </Button>
            </form>
          </ConfigProvider>
        </div>
      </section>
    </SlideTransition>
  );
}
