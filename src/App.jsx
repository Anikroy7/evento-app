import { CssBaseline } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Components/utils/Loading";
import { useGetHomeOnwerByIdQuery } from "./features/api/homeOwnerApi";
import { setUser } from "./features/auth/authSlice";
import { setHomeOnwerDetails } from "./features/homeOwner/homeOwnerSlice";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const homeOwnerId = localStorage.getItem("homeOwnerId");
  console.log(homeOwnerId);
  const {  isLoading, isSuccess, data } =useGetHomeOnwerByIdQuery(homeOwnerId)
// console.log(data.data.attributes.homes);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      }
    });
    if (isSuccess&&data) {
      console.log(data.data.attributes.homes.data);
      dispatch(setHomeOnwerDetails({ id: data.data.id, homes: data.data.attributes.homes.data }));
    }
  }, [isSuccess, data]);

  if (isLoading) return <Loading />;

  return (
    <>
      <CssBaseline />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
