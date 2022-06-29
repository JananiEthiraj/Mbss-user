import React, { useEffect, useState } from "react";
import "../App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button } from "@mui/material";

const Read = () => {
  const Api_Url = "https://62b56502530b26da4ccdef2d.mockapi.io/userdetails/";

  const [apiData, setApiData] = useState([]);
  const deleteUser = async (id) => {
    await axios.delete(Api_Url + id);
    callGetApi();
  };
  const callGetApi = async () => {
    const resp = await axios.get(Api_Url);
    setApiData(resp.data);
  };
  useEffect(() => {
    callGetApi();
  }, []);
  return (
    <div>
      <div className="Read">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <h3>Name</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Number</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Email</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Location</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Queries</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell align="right">{data.uname}</TableCell>
                  <TableCell align="right">{data.number}</TableCell>
                  <TableCell align="right">{data.email}</TableCell>
                  <TableCell align="right">{data.location}</TableCell>
                  <TableCell align="right">{data.query}</TableCell>

                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => deleteUser(data.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Read;
