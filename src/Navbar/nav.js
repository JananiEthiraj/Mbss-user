import React from "react";
import icon from "../Assert/images/icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Nav() {
  const LIST = {
    textDecoration: "none",
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const call = () => {
    window.location.href = "tel:9789093629";
  };
  const maps = () => {
    window.location.href =
      "https://www.google.com/maps/dir//No.+19%2F3B,+Murugan+Battery+Sales+and+Service,+Sri+Sakthi+Apartments,+3rd+Main+Rd,+NCBS+Colony,+Nanganallur,+Chennai,+Tamil+Nadu+600061/@12.983637,80.1884553,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525dfe8b61d719:0xd97c8e739960ca2d!2m2!1d80.190644!2d12.983637";
  };
  return (
    <div>
      <nav>
        <Button onClick={handleHome}>
          <img src={icon} alt="Logo" width="70px" height="60px"></img>
        </Button>

        <ul className="navlist">
          <NavLink to="/about" style={LIST}>
            <li>
              <h3>AboutUs</h3>
            </li>
          </NavLink>
          <NavLink to="/products" style={LIST}>
            <li>
              <h3>Products</h3>
            </li>
          </NavLink>
          <NavLink to="/enquire" style={LIST}>
            <li>
              <h3>Enquire</h3>
            </li>
          </NavLink>
          <li>
            <FiPhoneCall className="call" onClick={call} />
          </li>
          <li>
            <HiOutlineLocationMarker className="call" onClick={maps} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
