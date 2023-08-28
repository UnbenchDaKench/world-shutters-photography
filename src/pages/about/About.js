import React from "react";
import "./About.scss";
import { Box, Typography } from "@mui/material";
import BioPic from "../../images/bio/bio-pic.jpg";
import GearPic from "../../images/bio/gear-pic.jpg";

function About() {
  return (
    <div className="About">
      <Box
        className="bio"
        sx={{
          mt: {
            xs: '20%',
            md: '10%',
          },
          width: {
            xs: "80vw",
          },
          display: "flex",
          flexDirection: {
            xs: "column",
          },
        }}
      >
        <img className="bio-pic" src={BioPic} />
        <Typography
          variant="h5"
          sx={{
            mt: "5%",
            width: {
              md: "20vw",
              lg: "20vw",
            },
            mr: {
              sm: "20vw",
              md: "0vw",
              lg: "15vw",
            },
            ml: {
              md: "48vw",
              lg: '45vw'
            },
          }}
        >
          A Little About me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: "3%",
            ml: {
              xs: "6vw",
              sm: "4vw",
              md: "20vw",
              lg: '40vw'
            },
            width: {
              xs: "70vw",
              sm: "50vw",
              md: "45vw",
              lg: "30vw",
            },
          }}
        >
          My name is John Gotti, and I have been a photogrpher for over 15 years
          now. I fell in love with photogaphy at a young age going on various
          adventures, and wishing I could show others the beautiful sights that
          I was seeing. 5 years ago I took a leap of faith and left my day job
          to be able to travel the world and show people even more of the
          beauties out there, through my lens!
        </Typography>
        <img className="gear-pic" src={GearPic} />
        <Typography
          variant="h5"
          sx={{
            mt: "5%",
            width: {
              md: "15vw",
              lg: "10vw",
            },
            mr: {
              sm: "20vw",
              md: "0vw",
              lg: "30vw",
            },
            ml: {
              md: "19vw",
              lg: "12vw",
            },
          }}
        >
          What I use
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: "3%",
            ml: {
              xs: "6vw",
              sm: "4vw",
              md: "4vw",
            },
            mb: '10%',
            width: {
              xs: "70vw",
              sm: "50vw",
              md: "45vw",
              lg: "25vw",
            },
          }}
        >
          I have used the Nikon D850 FX-format Digital SLR camera for many years
          now and it has done amazing work! I have stuck with Nikon for some
          time now and have not had any issues with their products
        </Typography>
      </Box>
    </div>
  );
}

export default About;
