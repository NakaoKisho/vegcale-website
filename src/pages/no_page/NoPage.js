import "./NoPage.css"
import AirshipIcon from "./../../assets/svg/airship.svg";
import { Box, Typography } from "@mui/material";

export default function NoPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          404
        </Typography>
      </Box>
      <Box
        sx={{
          width: 1,
          textAlign: "end"
        }}
      >
        <img class={"airship-animation"} style={{ height: 80, width: 80 }} src={AirshipIcon} alt="link to my github account" />
      </Box>
    </>
  );
}