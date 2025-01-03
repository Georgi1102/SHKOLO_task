import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Buttons() {
  const [alertMsg, setAlertMsg] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setAlertMsg(location.state);

      //clear the alert after 5 seconds
      const timer = setTimeout(() => {
        setAlertMsg("");
        navigate(location.pathname, { replace: true });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.state, navigate, location.pathname]);
  return (
    <>
      <Header />

      {alertMsg && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {alertMsg}
        </div>
      )}

      <Button />
      <Footer />
    </>
  );
}
