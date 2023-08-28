import React from "react";
import "./Home.scss";
import { useState, useEffect } from "react";
import { AllPhotos } from "../../data/allPhotos/AllPhotos";
import { Typography } from "@mui/material";

function Home() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex(Math.floor(Math.random() * AllPhotos.length));
      //setCurrentPhotoIndex((prevIndex) => (prevIndex < AllPhotos.length-1 ? prevIndex + 1 : 0))
    }, 5000);
    document.body.style.overflow = "hidden";
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "scroll";
    };
  }, []);

  const backgroundImage = `url('${AllPhotos[currentPhotoIndex].photo}')`;
  return (
    <div className="Home" style={{ backgroundImage: backgroundImage }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          width: {
            xs: "250px",
          },
          display: {
            xs: "block",
            sm: "none",
          },
          color: "white",
          position: "fixed",
          transform: {
            xs: "translate(0%,350%)",
          },
        }}
      >
        World Shutters Photography
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          width: "400px",
          display: {
            xs: "none",
            sm: "block",
            md: "none",
          },
          color: "white",
          position: "fixed",
          transform: {
            xs: "translate(0%, 250%)",
          },
        }}
      >
        World Shutters Photography
      </Typography>

      <Typography
        variant="h2"
        gutterBottom
        sx={{
          width: "400px",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "none",
          },
          color: "white",
          position: "fixed",
          transform: {
            xs: "translate(0%, 200%)",
          },
        }}
      >
        World Shutters Photography
      </Typography>

      <Typography
        variant="h1"
        gutterBottom
        sx={{
          width: "800px",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
          },
          color: "white",
          position: "fixed",
          transform: {
            xs: "translate(0%, 100%)",
          },
        }}
      >
        World Shutters Photography
      </Typography>
    </div>
  );
}

export default Home;
