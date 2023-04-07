import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Divider, Input, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import Loading from "../../Components/utils/Loading";
import { useUpdateHomebyIdMutation } from "../../features/api/homesApi";

function Row({ home, edit, setEdit, handleEdit, clicked, setClicked }) {
  const [updatedObj, setUpdatedObj] = React.useState({ ...home.attributes });

  const {
    id,
    attributes: {
      title,
      address,
      description,
      baths,
      price,
      category,
      beds,
      bedrooms,
      superhost: { name, about },
      publishedAt,
    },
  } = home;
  const [updateHome, { data, isLoading, isSuccess, error }] =
    useUpdateHomebyIdMutation();

  const date = new Date(publishedAt).toDateString();
  const [open, setOpen] = React.useState(false);

  const handleOnchange = (e) => {
    if (e.target.name === "name" || e.target.name === "about") {
      console.log("come");
      setUpdatedObj((prev) => ({
        ...prev,
        superhost: {
          ...prev.superhost,
          [e.target.name]: e.target.value,
        },
      }));
    } else {
      setUpdatedObj((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  React.useEffect(() => {
    if (clicked) {
      console.log(updatedObj);
      updateHome({
        updatedData: updatedObj,
        id,
      });
      setEdit(false);
    }
  }, [clicked]);

  if (isLoading) return <Loading />;
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        <TableCell>
          {edit ? (
            <Input
              name="title"
              onChange={(e) => handleOnchange(e)}
              defaultValue={title}
            />
          ) : (
            <Typography>{title}</Typography>
          )}
        </TableCell>
        <TableCell>
          {edit ? (
            <Input
              name="address"
              onChange={(e) => handleOnchange(e)}
              defaultValue={address}
            />
          ) : (
            <Typography>{address}</Typography>
          )}
        </TableCell>
        <TableCell>
          {edit ? (
            <Input
              onChange={(e) => handleOnchange(e)}
              name="price"
              type={"number"}
              defaultValue={price}
            />
          ) : (
            <Typography> ${price}</Typography>
          )}
        </TableCell>
        <TableCell>{category}</TableCell>
        <TableCell sx={{ display: "flex", gap: 1 }}>
          <Button
            sx={{ px: 1, py: 0, fontSize: "15px" }}
            variant="outlined"
            color="primary"
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            sx={{ px: 1, py: 0, fontSize: "15px" }}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={20}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Published Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Beds</TableCell>
                    <TableCell>Bedrooms</TableCell>
                    <TableCell>Baths</TableCell>
                    <TableCell>Super host</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      {date}
                    </TableCell>
                    <TableCell>
                      {edit ? (
                        <TextField
                          name="description"
                          label="Description"
                          multiline
                          rows={8}
                          defaultValue={description}
                          fullWidth
                          margin="normal"
                          onChange={(e) => handleOnchange(e)}
                        />
                      ) : (
                        <Typography> {description}</Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      {edit ? (
                        <Input
                          name="beds"
                          onChange={(e) => handleOnchange(e)}
                          type={"number"}
                          defaultValue={beds}
                        />
                      ) : (
                        <Typography> {beds}</Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      {edit ? (
                        <Input
                          name="bedrooms"
                          onChange={(e) => handleOnchange(e)}
                          type={"number"}
                          defaultValue={bedrooms}
                        />
                      ) : (
                        <Typography> {bedrooms}</Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      {edit ? (
                        <Input
                          name="baths"
                          onChange={(e) => handleOnchange(e)}
                          type={"number"}
                          defaultValue={baths}
                        />
                      ) : (
                        <Typography> {baths}</Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      <Box pt={1}>
                        Name:{" "}
                        {edit ? (
                          <Input
                            name="name"
                            onChange={(e) => handleOnchange(e)}
                            defaultValue={name}
                          />
                        ) : (
                          <Typography> {name}</Typography>
                        )}
                      </Box>
                      <Divider />
                      <Box pt={1}>
                        About:
                        {edit ? (
                          <Input
                            name="about"
                            onChange={(e) => handleOnchange(e)}
                            defaultValue={about}
                          />
                        ) : (
                          <Typography> {about}</Typography>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function MyHomes() {
  const [edit, setEdit] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const {
    homeOwner: { homes },
  } = useSelector((state) => state);

  const handleEdit = () => {
    setEdit(true);
    setClicked(false);
  };

  React.useEffect(() => {
    console.log("edit", edit, "clicked", clicked);
    console.log('comes');
  }, [edit, clicked, homes]);


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
            <TableCell align="right">
              {edit && (
                <Button
                  onClick={() => setClicked(true)}
                  variant="contained"
                  color="success"
                >
                  Save
                </Button>
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {homes?.map((home) => (
            <Row
              edit={edit}
              handleEdit={handleEdit}
              setEdit={setEdit}
              key={home.name}
              clicked={clicked}
              home={home}
              setClicked={setClicked}
            />
          ))}
          {
            
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
