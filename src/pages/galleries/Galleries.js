import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Landscape4 from "../../images/landscapes/landscape-4.jpg";
import Animal8 from "../../images/animals/animals-8.jpg";
import Cityscape3 from "../../images/cityscapes/cityscape-3.jpg";
import People11 from "../../images/people/people-11.jpg";
import { Link } from "react-router-dom";

function Galleries() {
  return (
    <div className="Galleries">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2%",
          justifyContent: 'center',
          width: {
            sm: "100%",
          },
          height: {
            sm: "100%",
          },
        }}
      >
        <Box
          component="a"
          href="/Landscapes"
          sx={{
            width: {
              xs: "60%",
              sm: "45%",
            },
            height: "30%",
            mt: "3%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              height: "100%",
              mt: "3%",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "70%",
                objectFit: "cover",
                //objectPosition: "center",
              }}
              src={Landscape4}
            ></Box>
            <Typography>Landscapes</Typography>
          </Paper>
        </Box>
        <Box
          component="a"
          href="/Animals"
          sx={{
            width: {
              xs: "60%",
              sm: "45%",
            },
            height: "30%",
            mt: "3%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              height: "100%",
              mt: "3%",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "70%",
                objectFit: "cover",
                //objectPosition: "center",
              }}
              src={Animal8}
            />
            <Typography>Animals</Typography>
          </Paper>
        </Box>
        <Box
          component="a"
          href="/Cityscapes"
          sx={{
            width: {
              xs: "60%",
              sm: "45%",
            },
            height: "30%",
            mt: "3%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              height: "100%",
              mt: "3%",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "70%",
                objectFit: "cover",
                //objectPosition: "center",
              }}
              src={Cityscape3}
            ></Box>
            <Typography>CityScapes</Typography>
          </Paper>
        </Box>
        <Box
          component="a"
          href="/People"
          sx={{
            width: {
              xs: "60%",
              sm: "45%",
            },
            height: "30%",
            mt: "3%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              height: "100%",
              mt: "3%",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "70%",
                objectFit: "cover",
                //objectPosition: "center",
              }}
              src={People11}
            ></Box>
            <Typography>People</Typography>
          </Paper>
        </Box>
        
      </Box>
    </div>
  );
}

export default Galleries;
