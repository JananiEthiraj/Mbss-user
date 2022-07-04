import React from "react";
import { SliderData } from "./imgdata";
import ImageSlider from "./image";
import "./about.css";
import { Button, Grid } from "@mui/material";

export default function About() {
  return (
    <>
      <div className="about">
        <h1 className="abtTitle">Murugan Battery Sales & Service</h1>
        <ImageSlider slides={SliderData} />
        <h3 className="hfour">About</h3>
        <p className="para">
          Our shop Murugan Battery Sales & service is located in{" "}
          <b>Nanganallur, Chennai</b> is one of the leading businesses in the
          Inverter batteries sales. Also known for other products like
          Inverters, solar Batteries, Car Batteries, 2 wheeler batteries, Auto
          batteries, Online Ups batteries, battery acids, Inverter Repair &
          Services, Inverter Battery Dealers, UPS Dealers and much more. We are
          providing longlasting and best for our customer for more than 6 years.
        </p>
        <h3 className="hfour">Overview</h3>
        <p className="para">
          Established in the year 2016, Murugan Battery Sales&service in
          Nanganallur, Chennai is a top player in the category Inverter
          Dealers-Amaron in the Chennai. This well-known establishment acts as a
          one-stop destination servicing customers both local and from other
          parts of Chennai. Over the course of its journey, this business has
          established a firm foothold in it’s industry. The belief that customer
          satisfaction is as important as their products and services, have
          helped this establishment garner a vast base of customers, which
          continues to grow by the day. This business employs individuals that
          are dedicated towards their respective roles and put in a lot of
          effort to achieve the common vision and larger goals of the company.
          In the near future, this business aims to expand its line of products
          and services and cater to a larger client base. In Chennai, this
          establishment occupies a prominent location in Nanganallur. It is an
          effortless task in commuting to this establishment as there are
          various modes of transport readily available. It is at Sri Shakthi
          Apartments, 3rd Main Road, Near LIC Office, which makes it easy for
          first-time visitors in locating this establishment. It is known to
          provide top service in the following categories: Inverter Dealers,
          Battery Dealers, Car Battery Dealers, Battery Dealers-Exide, Battery
          Dealers-Amaron, Inverter Repair & Services, Inverter Battery Dealers,
          UPS Dealers.
        </p>
        
        <Grid container spacing={2}>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h5 className="hfive">Contact Us</h5>
            <p className="para">
              Sathish Kumar K<br />
              Mobile: 9789093656
            </p>
            <br />
            <Button variant="contained">
              <a href="tel: 9789093656">Call Now</a>
            </Button>
            <h5 className="hfive">Address</h5>
            <p className="para">
              19/3B, Sri Shakthi Apartments, 3rd Main Road,
              <br /> Nanganallur, Chennai - 600061
            </p>
            <br />
            <Button variant="contained" size="small">
              <a href="https://www.google.com/maps/dir//No.+19%2F3B,+Murugan+Battery+Sales+and+Service,+Sri+Sakthi+Apartments,+3rd+Main+Rd,+NCBS+Colony,+Nanganallur,+Chennai,+Tamil+Nadu+600061/@12.983637,80.1884553,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525dfe8b61d719:0xd97c8e739960ca2d!2m2!1d80.190644!2d12.983637">
                Direction
              </a>
            </Button>
          </Grid>
          <Grid item md={6} sx={{ display: "flex", flexDirection: "column" }}>
            <h5 className="hfive">Our Branches</h5>

            <p className="para">
              Murugan Battery Sales & Service -{" "}
              <a href="https://www.google.com/maps/dir//4,+Murugan+Battery+Sales+%26+Service,+195,+Ottiambakkam+Main+Rd,+Sithalapakkam,+Chennai,+Tamil+Nadu+600126/@12.891334,80.1798445,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5259f6ad4a6989:0x31b7c5426a13c839!2m2!1d80.1840717!2d12.891334">
                Sithalapakkam
              </a>
            </p>
            <br />
            <p className="para">
              Murugan Battery Company -{" "}
              <a href="https://www.google.com/maps/dir//Murugan+Battery+Company,+New+No:+7,+Old+No:+AF-53,+11th+Main+Rd,+opp.+to+Sundaram+Hospital,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040/@13.0834939,80.2031472,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525da00fffffff:0xef179e2a0338d5fd!2m2!1d80.2053359!2d13.0834939">
                Perambur
              </a>
            </p>
            <br />
            <p className="para">
              Murugan Battery Company -{" "}
              <a href="https://www.google.com/maps/dir//Murugan+Battery+Company+Battery+Sales+Man,+R3VV%2BGR8,+Unnamed+Road,+Vinayagapuram,+Karanaipuducheri,+Tamil+Nadu+603202/@12.8437862,80.0245497,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52f7d4463e6c39:0x226f9c330d42eaeb!2m2!1d80.0945597!2d12.8437983">
                Guduvancherry
              </a>
            </p>
            <br />
            <p className="para">
              Murugan Battery Company -{" "}
              <a href="https://www.google.com/maps/dir//Murugan+Battery+Company,+R4XR%2BXG7,+Agaramthen,+Tamil+Nadu+600048/@12.8520092,80.1522539,13.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5258ff8b740fdf:0xf3196c4f424e7606!2m2!1d80.1413074!2d12.849917">
                Kandigai
              </a>
            </p>
            <br />
            <p className="para">
              Murugan Battery Company -{" "}
              <a href="https://www.google.com/maps/dir//Murugan+Battery+Company,+New+No:+7,+Old+No:+AF-53,+11th+Main+Rd,+opp.+to+Sundaram+Hospital,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040/@13.080642,80.16791,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525da00fffffff:0xef179e2a0338d5fd!2m2!1d80.2053359!2d13.0834939">
                Anna Nagar
              </a>
            </p>
            <br />
            <p className="para">
              Murugan Battery Company -{" "}
              <a href="https://www.google.com/maps/dir//Murugan+Battery+Company,+R4XR%2BXG7,+Agaramthen,+Tamil+Nadu+600048/@12.8499077,80.0712658,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5258ff8b740fdf:0xf3196c4f424e7606!2m2!1d80.1413074!2d12.849917">
                Perungalathur
              </a>
            </p>
            <br />
            <p className="para">
              Murugan Battery Service -{" "}
              <a href="https://www.google.com/maps/dir//Murugan+Battery+Company,+New+No:+7,+Old+No:+AF-53,+11th+Main+Rd,+opp.+to+Sundaram+Hospital,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040/@13.0818412,80.0664866,11.47z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3a525da00fffffff:0xef179e2a0338d5fd!2m2!1d80.2053359!2d13.0834939!3e0">
                Anna Nagar
              </a>
            </p>
            <br />

            <p className="para">
              Murugan Battery Service -{" "}
              <a href="https://www.google.com/maps/dir//MURUGAN+BATTERY+SERVICE,+044-23469993,+C-10,+ROAD,+Razaak+Garden,+MMDA+Colony,+Arumbakkam,+Chennai,+Tamil+Nadu+600106/@13.0746866,80.1461704,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a52674b3346135f:0x982f2534ad624ecd!2m2!1d80.216212!2d13.074696">
                Arumbakkam
              </a>
            </p>
            <br />

            <p className="para">
              Murugan Battery Service -{" "}
              <a href="https://www.google.com/maps/dir//Murugan+Battery+Services,+Nelson+Manickam+Road,+New+Colony,+Aminjikarai,+Chennai,+Tamil+Nadu/@13.0693336,80.1547374,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5266858951a09f:0xac9da9c719608ab8!2m2!1d80.224779!2d13.069343">
                Nelson Manikam Road
              </a>
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
