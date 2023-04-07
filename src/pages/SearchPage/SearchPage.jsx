import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchHomeCard from "../../Components/SearchHomeCard/SearchHomeCard";
import isEmpty from "../../Components/utils/isEmpty";
import Loading from "../../Components/utils/Loading";
import { useGetHomesQuery } from "../../features/api/homesApi";

const SearchPage = () => {
  const { isLoading, data, isSuccess } = useGetHomesQuery();
  const navigate = useNavigate()
  const { filter } = useSelector((state) => state);
   if(isEmpty(filter)){
    console.log('come');
    navigate('/')
  }
  const {
    address,
    arrivalDate,
    depratureDate,
    guests: { adults, babies, childs },
  } = filter;

  if (isLoading) {
    return <Loading />;
  }

  const filteredData = data?.data?.filter((home) => {
    return home.attributes.address.toLowerCase() === address.toLowerCase();
  });

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
              filteredData.map((item) => (
                <SearchHomeCard
                  key={item.id}
                  homeId={item.id}
                  data={item.attributes}
                />
              ))
            ) : (
              <Typography mt={2} variant="h6" textAlign={"center"}>
                No homes available..Search with another one!!!
              </Typography>
            )}
          </Box>
        </Stack>

        <Box sx={{display:{sm:'none', xs:'none', lg:'block', xl:"block", md:'block'}}} width={"100%"} height={"100vh"}>
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
