import { Grid, TextField, Button, Paper } from "@mui/material";
import React from "react";
import "../App.css";
import { useFormik } from "formik";
import * as yup from "yup";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Enquire() {
  const navigates = useNavigate();

  const formik = useFormik({
    initialValues: {
      uname: "",
      number: null,
      email: "",
      location: "",
      query: "",
    },
    validationSchema: yup.object({
      uname: yup.string().required(),
      number: yup.string().required("requird").min(9, "only for this"),
      email: yup.string().required("required").email(),
      location: yup.string(),
      query: yup.string().required(" required"),
    }),
    onSubmit: (values) => {
      axios.post(
        "https://62b56502530b26da4ccdef2d.mockapi.io/userdetails/",
        values
      );
      alert(`Hi ${values.uname}, Your Query is Submitted`);
      navigates("/");
    },
  });

  return (
    <div className="enquire">
      <div className="enquires">
        <Paper
          sx={{
            borderRadius: 3,

            justifyContent: "center",
            alignItems: "center",
            marginLeft: "35%",
          }}
        >
          <div className="form">
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h1>Enquire</h1>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    name="uname"
                    required
                    value={formik.values.uname}
                    variant="filled"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  {formik.touched.uname && formik.errors.uname ? (
                    <span>{formik.errors.uname}</span>
                  ) : null}{" "}
                  <br />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Mobile Number"
                    name="number"
                    required
                    variant="filled"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  {formik.touched.number && formik.errors.number ? (
                    <span>{formik.errors.number}</span>
                  ) : null}{" "}
                  <br />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    required
                    variant="filled"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  {formik.touched.email && formik.errors.email ? (
                    <span>{formik.errors.email}</span>
                  ) : null}{" "}
                  <br />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Location"
                    name="location"
                    variant="filled"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  {formik.touched.location && formik.errors.location ? (
                    <span>{formik.errors.location}</span>
                  ) : null}{" "}
                  <br />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="your Query..."
                    name="query"
                    multiline
                    required
                    variant="filled"
                    value={formik.values.query}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  {formik.touched.query && formik.errors.query ? (
                    <span>{formik.errors.query}</span>
                  ) : null}{" "}
                  <br />
                </Grid>

                <Grid item xs={12}>
                  <div className="Btn">
                    <h1>
                      <Button variant="contained" onClick={formik.handleSubmit}>
                        Submit
                      </Button>
                    </h1>
                  </div>
                </Grid>
                <br />
              </Grid>
            </form>
          </div>
        </Paper>
      </div>
    </div>
  );
}

// import { Grid, TextField, Button, Paper } from "@mui/material";
// import React, { useState } from "react";
// import "../App.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Enquire() {
//   const [uname, setuname] = useState("");
//   const [number, setnumber] = useState();
//   const [email, setemail] = useState("");
//   const [location, setlocation] = useState("");
//   const [query, setquery] = useState("");

//   const navigates= useNavigate();

//   const getData = async () => {
//     await axios.post(
//       "https://62b56502530b26da4ccdef2d.mockapi.io/userdetails",
//       {
//         uname,
//         number,
//         email,
//         location,
//         query,
//       }
//     );
//     alert("Your Query Submitted Successfully ");
//     navigates("/read");
//   };

//   return (
//     <div className="enquire">
//       <div className="enquires">
//         <Paper
//           sx={{
//             borderRadius: 3,

//             justifyContent: "center",
//             alignItems: "center",
//             marginLeft: "35%",
//           }}
//         >
//           <div className="form">
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <h1>Enquire</h1>
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   id="standard-basic"
//                   label="Name"
//                   value={uname}
//                   variant="filled"
//                   onChange={(e) => setuname(e.target.value)}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   id="standard-basic"
//                   label="Mobile Number"
//                   required
//                   variant="filled"
//                   value={number}
//                   onChange={(e) => setnumber(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id="standard-basic"
//                   label="Email"
//                   required
//                   variant="filled"
//                   value={email}
//                   onChange={(e) => setemail(e.target.value)}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   id="standard-basic"
//                   label="Location"
//                   variant="filled"
//                   value={location}
//                   onChange={(e) => setlocation(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id="standard-basic"
//                   label="Ask for what you want to know..."
//                   multiline
//                   variant="filled"
//                   value={query}
//                   onChange={(e) => setquery(e.target.value)}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <div className="Btn">
//                   <h1>
//                     <Button variant="contained" onClick={getData}>
//                       Submit
//                     </Button>
//                   </h1>
//                 </div>
//               </Grid>
//               <br />
//             </Grid>
//           </div>
//         </Paper>
//       </div>
//     </div>
//   );
// }
