import React from "react";
import { useNavigate } from "react-router-dom";

//styles
// import "./Consent.css";

//images
import privateImg from "@assets/private.svg";
import securedImg from "@assets/secured.svg";
import protectedImg from "@assets/protected.svg";

//components
import CondueetLogo from "@comp/condueet-logo/CondueetLogo";
import { Button, Divider, Checkbox } from "antd";
import { motion } from "framer-motion";

export default function Consent() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const handleSubmit = () => {
    navigate("/banks", { state: checked });
  };

  return (
    <section className="consent p-4 min-h-[500px]">
      <div className="consent-wrap">
        <div className="consent-check">
          <div className="consent-logo mb-3">
            <CondueetLogo />
          </div>
          <Divider>
            <h1 className="text-lg text-center text-main-blue font-bold">
              Sync your account with Condueet
            </h1>
          </Divider>
          <section className="details my-8 px-4 flex flex-col gap-y-4">
            <div className="consent-check_item flex items-start gap-x-3">
              <img src={securedImg} alt="" />
              <div className="consent-check_item-text">
                <p className="font-bold">Secured</p>
                <p className="text-sm">
                  Your information is encrypted using bank grade security.
                </p>
              </div>
            </div>
            <div className="consent-check_item flex items-start gap-x-3">
              <img src={protectedImg} alt="" />
              <div className="consent-check_item-text">
                <p className="font-bold">Protected</p>
                <p className="text-sm">
                  Your credentials will never be made accessible to Condueet.
                </p>
              </div>
            </div>
            <div className="consent-check_item flex items-start gap-x-3">
              <img src={privateImg} alt="" />
              <div className="consent-check_item-text">
                <p className="font-bold">Private</p>
                <p className="text-sm">
                  Condueet doesn’t have access to move your funds.
                </p>
              </div>
            </div>
          </section>
          <form onSubmit={handleSubmit} className="px-4">
            <div className="consent-check_item flex items-start gap-x-4">
              <Checkbox
                type="checkbox"
                className="checked:!text-deep-blue"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <p className="text-sm">
                By clicking on the button below you agree to Condueet T&C.
              </p>
            </div>
            {checked && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {},
                }}
                className="action flex justify-end"
              >
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="bg-deep-blue mt-6 rounded-lg"
                >
                  Select Account
                </Button>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
