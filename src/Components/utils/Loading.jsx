import { Stack } from "@mui/system";
import React from "react";
import loading from "../../assets/loading/loading.gif";

const Loading = () => {
  const style = {
    background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%)`,
  };
  //'relative flex justify-center items-center h-screen w-full'
  //'h-full w-full absolute top-0'
  return (
    <Stack
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Stack
        style={style}
        sx={{
          height: "100%",
          width:'100%',
          position:'absolute',
          top:0
        }}
      ></Stack>
      <img src={loading} alt="" />
    </Stack>
  );
};

export default Loading;
