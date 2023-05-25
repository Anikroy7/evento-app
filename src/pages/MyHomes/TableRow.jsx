import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Button,
  Divider,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Loading from "../../Components/utils/Loading";
import {
  useDeleteHomeByIdMutation,
  useUpdateHomebyIdMutation,
} from "../../features/api/homesApi";
import OrderHistory from "../../Components/OrderHistory/OrderHistory";

const Tablerow = ({ home, id, clicked, setClicked }) => {
  const [updatedObj, setUpdatedObj] = React.useState({ ...home.attributes });

  const [ohOpen, setohOpen] = React.useState(false);
  const handleOpen = () => setohOpen(true);
  const handleClose = () => setohOpen(false);

  const [edit, setEdit] = React.useState(false);
  console.log(id);
  const {
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
  const [deleteHome, { isSuccess: deleteSuccess, isLoading: deleteLoading }] =
    useDeleteHomeByIdMutation();

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
  const handleDelete = () => {
    const isAgree = window.confirm("Are you want to delete sure?");
    console.log(isAgree);
    if (isAgree) deleteHome(id);
  };

  const handleEdit = () => {
    setEdit(true);
    setClicked(false);
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

  if (isLoading || isLoading) return <Loading />;
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
            onClick={handleOpen}
            variant="outlined"
          >
            Order History
          </Button>
          <Button
            sx={{ px: 1, py: 0, fontSize: "15px" }}
            variant="outlined"
            color="primary"
            onClick={() => handleEdit(id)}
          >
            Edit
          </Button>
          <Button
            sx={{ px: 1, py: 0, fontSize: "15px" }}
            variant="contained"
            color="error"
            onClick={handleDelete}
          >
            Delete
          </Button>

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
        {ohOpen && (
          <OrderHistory
            ohOpen={ohOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        )}
      </TableRow>
    </>
  );
};

export default Tablerow;
