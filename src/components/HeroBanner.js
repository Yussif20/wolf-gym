import React from "react";

import { Box, Typography, Stack } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Stack></Stack>
    </Box>
  );
};

export default HeroBanner;
