import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import Tablerow from "./TableRow";




export default function MyHomes() {

  const [clicked, setClicked] = React.useState(false);
  const {
    homeOwner: { homes },
  } = useSelector((state) => state);



  return (
    <TableContainer component={Paper} sx={{ px: 9 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Actions</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {homes?.map((home) => (
            <Tablerow
              key={home.id}
              id={home.id}
              clicked={clicked}
              home={home}
              setClicked={setClicked}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
