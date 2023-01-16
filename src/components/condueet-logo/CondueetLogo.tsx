import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "@assets/logo.svg";

const CondueetLogo = () => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 1 }}
      className="consent-logo"
    >
      <Link to="/" className="flex gap-x-2 items-center justify-center">
        <img src={logo} alt="company-logo" className="h-8 w-8 rounded-full" />
        <span className="font-extrabold text-xl text-deep-blue">Condueet</span>
      </Link>
    </motion.div>
  );
};

export default CondueetLogo;
