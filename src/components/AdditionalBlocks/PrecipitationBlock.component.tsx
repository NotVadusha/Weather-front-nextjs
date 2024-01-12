"use client";
import { Box, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";

type PrecipitationBlockProps = {
  precipitation: number;
};

export default function PrecipitationBlock({
  precipitation,
}: PrecipitationBlockProps) {
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
          <Collapse in={true} orientation="vertical">
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
