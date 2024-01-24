"use client";
import React, { useState } from "react";
import { Box, Collapse, Skeleton, Typography, useTheme } from "@mui/material";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import { blue } from "@mui/material/colors";

type PrecipitationBlockProps = {
  precipitation: number;
};

export default function PrecipitationBlock({
  precipitation,
}: PrecipitationBlockProps) {
  const [animation, setAnimation] = useState<boolean>(false);
  setTimeout(() => setAnimation(true), 1000);

  const theme = useTheme();

  return (
    <>
      {precipitation !== null ? (
        <Box
          sx={{
            backgroundImage: `linear-gradient(to top, ${blue[800]} ${
              precipitation * 100
            }%, rgba(255, 255, 255, 1) ${precipitation * 100}%)`,
          }}
          borderRadius={"6px"}
          border={2}
          borderColor={theme.palette.primary.main}
          minWidth={"4rem"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent="center"
            alignContent="center"
            height={"100%"}
          >
            <Box width={"fit-content"} mx="auto">
              <WavesOutlinedIcon />
            </Box>
            <Typography variant="body1" textAlign={"center"}>
              {precipitation} mm
            </Typography>
          </Box>
        </Box>
      ) : (
        <Skeleton />
      )}
    </>
  );
}
