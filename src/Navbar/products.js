import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Card, CardContent, CardActions } from "@mui/material";

function Products() {
  const [auto, setauto] = useState([]);

  function autoMotive() {
    const url = "  http://localhost:5000/Automotive";

    axios.post();
    axios
      .get(url)
      .then((resp) => resp.data)
      .then((formated) => {
        setauto(formated);
        console.log(formated);
      })
      .catch((err) => {
        alert(err + " Oops something went wrong");
      });
  }

  const [invert, setinvert] = useState([]);

  function inverter() {
    const url = "http://localhost:5000/Inverter";

    axios.post();
    axios
      .get(url)
      .then((resp) => resp.data)
      .then((formated) => {
        setinvert(formated);
        console.log(formated);
      })
      .catch((err) => {
        alert(err + " Oops something went wrong");
      });
  }

  const [solar, setsolar] = useState([]);

  function solaR() {
    const url = "http://localhost:5000/Solar";

    axios.post();
    axios
      .get(url)
      .then((resp) => resp.data)
      .then((formated) => {
        setsolar(formated);
        console.log(formated);
      })
      .catch((err) => {
        alert(err + " Oops something went wrong");
      });
  }

  useEffect(() => {
    autoMotive();
    inverter();
    solaR();
  }, []);

  return (
    <div className="products">
      <>
        <h1 className="heading">Automotive Batteries</h1>
        <div className="styles">
          {auto.map((values, index) => (
            <Card sx={{ margin: 1, borderRadius: 3, width: 300, height: 300 }}>
              <CardContent className="cardContent">
                <h3>{values.modal}</h3>
                <img
                  src={values.image}
                  height="20%"
                  width="20%"
                  alt="battery"
                ></img>
                <h4>Warranty: {values.warranty} </h4>

                <CardActions>
                  <button
                    className="button"
                    variant="text"
                    onClick={() => alert(auto[index].description)}
                  >
                    Learn More{" "}
                  </button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>
      </>

      <>
        <h1 className="heading">Inverter Batteries</h1>
        <div className="styles">
          {invert.map((values, index) => (
            <div className="e-card ">
              <Card sx={{ m: 1, borderRadius: 3, width: 300, height: 300 }}>
                <CardContent className="cardContent">
                  <h3>{values.modal}</h3>
                  <img
                    src={values.image}
                    height="20%"
                    width="20%"
                    alt="battery"
                  ></img>
                  <h4>Warranty: {values.warranty} </h4>

                  <CardActions>
                    <button
                      className="button"
                      variant="text"
                      onClick={() => alert(inverter[index].description)}
                    >
                      Learn More{" "}
                    </button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </>

      <>
        <h1 className="heading">Solar Batteries</h1>
        <div className="styles">
          {solar.map((values, index) => (
            <div className="e-card ">
              <Card sx={{ m: 1, borderRadius: 3, width: 300, height: 300 }}>
                <CardContent className="cardContent">
                  <h3>{values.modal}</h3>
                  <img
                    src={values.image}
                    height="20%"
                    width="20%"
                    alt="battery"
                  ></img>
                  <h4>Warranty: {values.warranty} </h4>

                  <CardActions>
                    <button
                      className="button"
                      variant="text"
                      onClick={() => alert(solar[index].description)}
                    >
                      Learn More{" "}
                    </button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
export default Products;
