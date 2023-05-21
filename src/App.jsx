import { CssBaseline } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import MeiliSearch from "meilisearch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  }, [data, isSuccess, isLoading]);

  return (
    <>
      <CssBaseline />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
