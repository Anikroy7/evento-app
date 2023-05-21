import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchHomeCard from "../../Components/SearchHomeCard/SearchHomeCard";
import isEmpty from "../../Components/utils/isEmpty";
import Loading from "../../Components/utils/Loading";
import { useGetHomesQuery } from "../../features/api/homesApi";
import MeiliSearch from "meilisearch";

const SearchPage = () => {
  const { isLoading } = useGetHomesQuery();
  const [filteredData, setFilterdData] = useState([]);
  const navigate = useNavigate();
  const { filter } = useSelector((state) => state);
  const {
    address,
    arrivalDate,
    depratureDate,
    guests: { adults, babies, childs },
  } = filter;

  //6062abda-a5aa-4414-ac91-ecd7944c0fkd
  const client = new MeiliSearch({
    host: "https://meilisearch-production-ace7.up.railway.app",
    apiKey: "anik119979",
  });

  useEffect(() => {
    client
      .index("home")
      .search(address)
      .then((res) => {
        const hits = res.hits;
        console.log('hits', hits);
        setFilterdData(hits);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isEmpty(filter)) {
    console.log("come");
    navigate("/");
  }

  if (isLoading) {
    return <Loading />;
  }
  console.log("filteredData", filteredData);
  // formated Date
  const formatedDate = `${new Date(depratureDate).toLocaleString("default", {
    month: "long",
  })} ${new Date(arrivalDate).getDate()}-${new Date(depratureDate).getDate()}`;

  const totalGuests = adults + babies + childs;

  return (
    <Stack maxWidth={"xl"} marginX={"auto"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            lg: "row",
            sm: "column-reverse",
            md: "column-reverse",
          },
          gap: 2,
        }}
      >
        <Stack width={"100%"}>
          <Box paddingX={6} paddingY={2}>
            <Typography component={"span"}>
              250 Stays {formatedDate} {totalGuests} guests
            </Typography>
            <Typography mt={2} variant="h4" fontWeight={600} component={"h6"}>
              Stay in {address}
            </Typography>
          </Box>
          <Box>
            {filteredData.length > 0 ? (
              filteredData.map((item) => {
                console.log("item", item);
                return (
                  <SearchHomeCard key={item.id} homeId={item.id} data={item} />
                );
              })
            ) : (
              <Typography mt={2} variant="h6" textAlign={"center"}>
                No homes available..Search with another one!!!
              </Typography>
            )}
          </Box>
        </Stack>

        <Box
          sx={{
            display: {
              sm: "none",
              xs: "none",
              lg: "block",
              xl: "block",
              md: "block",
            },
          }}
          width={"100%"}
          height={"100vh"}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Rajshahi+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Box>
      </Box>
    </Stack>
  );
};

export default SearchPage;
