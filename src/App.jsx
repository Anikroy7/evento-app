import { CssBaseline } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Components/utils/Loading";
import { useGetHomeOnwerByIdQuery } from "./features/api/homeOwnerApi";
import { setUser } from "./features/auth/authSlice";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const homeOwnerId = localStorage.getItem("homeOwnerId");
  const { isLoading, isSuccess, data } = useGetHomeOnwerByIdQuery(homeOwnerId, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("current user", user.email);
      console.log("current dta", data);
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  }, [data, isSuccess, isLoading]);

  console.log(isLoading);
  if (isLoading) return <Loading />;

  return (
    <>
      <CssBaseline />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
