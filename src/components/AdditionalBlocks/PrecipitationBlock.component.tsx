"use client";
import { Box, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";

type Props = {
  precipitation: number;
  isAnimationStarted: boolean;
};

export default function PrecipitationBlock({
  precipitation,
  isAnimationStarted,
}: Props) {
  return (
    <>
      {precipitation !== null ? (
        <Box
          display={"block"}
          flexDirection={"column"}
          gap={2}
          bgcolor={"white"}
          color="initial"
        >
          <Collapse in={isAnimationStarted} orientation="vertical">
            <Box bgcolor={"blue"} height={"100px"} width={"100%"}>
              <Typography>{precipitation} mm</Typography>
            </Box>
          </Collapse>
        </Box>
      ) : (
        <Typography>No info</Typography>
      )}
    </>
  );
}
