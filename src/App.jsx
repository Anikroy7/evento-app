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
  //melie search
  //https://meilisearch-production-ace7.up.railway.app
  //6062abda-a5aa-4414-ac91-ecd7944c0fkd
 /*  const [filteredData, setFilterdData] = useState([]);
   //6062abda-a5aa-4414-ac91-ecd7944c0fkd
   const client = new MeiliSearch({
    host: "https://meilisearch-production-ace7.up.railway.app",
    apiKey: "anik119979",
  });

  useEffect(() => {
    client
      .index("home")
      .search('dhaka')
      .then((res) => {
        const hits = res.hits;
        console.log('res', hits);
        // setFilterdData(hits);
      })
      .catch((err) => console.log(err));
  }, []); */
  const dispatch = useDispatch();
  const homeOwnerId = localStorage.getItem("homeOwnerId");
  const { isLoading, isSuccess, data } = useGetHomeOnwerByIdQuery(homeOwnerId, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("current user", user);
      // console.log("current dta", data);
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  }, [data, isSuccess, isLoading]);

  // console.log(isLoading);
  if (isLoading) return <Loading />;

  return (
    <>
      <CssBaseline />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
